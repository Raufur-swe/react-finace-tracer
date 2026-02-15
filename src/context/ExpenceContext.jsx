const { createContext, Children, useReducer, useEffect, useContext } = require("react");

const ExpenceContext = createContext();

const initialSate = {
    expenses: [],
    loading: false,
    error: null,
}

const expenseReducer = (state, action) => {
    /*এখানে কী হচ্ছে step by step:

🟢 ...state

পুরো আগের state copy করছে
(loading, error যেন হারিয়ে না যায়)

🟢 ...state.expenses

আগের সব expenses copy করছে

🟢 action.plaload

নতুন expense যোগ করছে */
    switch (action.type) {
        case "ADD_EXPENSE":
            return { ...state, expenses: [...state.expenses, action.payload] }

        case "DELETE_EXPENSE":
            return {
                ...state, expenses: state.expenses.filter((ex) =>
                    ex.id !== action.payload.id
                )
            }
        case "UPDATE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.map((ex) =>
                    ex.id === action.payload.id ? action.payload : ex
                ),
            };
        case "SET_EXPENSES":
            return { ...state, expenses: action.payload };
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        default:
            return state;

    }


}


export const ExpenceContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(expenseReducer, initialSate);

    // save expenses to local storage whenever they change

    useEffect(() => {

        try {
            localStorage.setItem("expenses", JSON.stringify(state.expenses));
        } catch (error) {
            console.error("Failed to save expenses to local storage: ", error);
            dispatch({
                type: "SET_ERROR",
                payload: error
            })
        }
    }, [state.expenses])

    const value = {
        ...state,
        addExpense: (expense) => {
            const newExpense = { ...expense, id: crypto.randomUUID() };
            dispatch({
                type: "ADD_EXPENSE",
                payload: newExpense
            })
        },

        deleteExpense: (id) => {

            dispatch({
                type: "DELETE_EXPENSE",
                payload: { id }
            })

        },

        updateExpense: (expense) => {
            dispatch({ type: "UPDATE_EXPENSE", payload: expense });
        },
    }

    return (<ExpenceContext.Provider value={value} >
        {children}
    </ExpenceContext.Provider>)


}


export const useExpenses = () => {
  const context = useContext(ExpenceContext);
  if (context === undefined) {
    throw new Error("useExpenses must be used within an ExpenseProvider");
  }
  return context;
};




