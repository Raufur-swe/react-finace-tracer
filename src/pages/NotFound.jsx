import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white text-black flex items-center justify-center px-6">
            <div className="text-center space-y-8">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-8xl md:text-[10rem] font-extrabold tracking-tight"
                >
                    404
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="space-y-2"
                >
                    <p className="text-2xl font-semibold">Page Not Found</p>
                    <p className="text-gray-600 max-w-md mx-auto">
                        Sorry, the page you’re looking for doesn’t exist or has been moved.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    
                >
                  
                     <Link to="/" className="border border-black bg-black text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 rounded-2xl shadow-md">
                    Return Home
                </Link>
                </motion.div>
               
            </div>
        </div>
    );
}
export default NotFound