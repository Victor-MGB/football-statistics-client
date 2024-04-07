import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import foot from "../images/foot.jpeg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Football Stats App</h1>
      <p className="text-lg text-gray-600 mb-8">
        Get all the latest statistics and insights about football matches.
      </p>
      <Link to="/country">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enter App
        </button>
      </Link>
      {/* Football animation */}
      <motion.img
        src={foot}
        alt="Football"
        className="w-40 h-40 mt-4 rounded-full shadow-md"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
};

export default Home;
