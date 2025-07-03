
import './App.css'
import { motion } from "framer-motion";


function App() {

  return (
    <>
       <div className="min-h-screen bg-gradient-to-br from-[#F3E5DC] to-[#8B5E3C] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden px-10 py-12 text-center text-[#2D1B0E]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-20 h-20 mx-auto flex items-center justify-center"
        >
         <img src='/images/logo.png' alt='logo' />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl font-bold text-[#3C2A21] mt-6"
        >
          Reyansh Creation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-[#4B2A17] mt-2"
        >
          Manufacturer of Exclusive Garment Fabrics & Fancy Dupattas
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 space-y-6"
        >
          <div>
            <h2 className="text-2xl font-semibold text-[#3C2A21] mb-2">Get in Touch</h2>
            <p className="text-sm md:text-md font-medium text-[#4B2A17]">Akshay Patel - 📞 +91 7383001130</p>
            <p className="text-sm md:text-md font-medium text-[#4B2A17]">Raj Patel - 📞 +91 9537304074</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#3C2A21] mb-2">For Purchase</h2>
            <p className="text-sm md:text-md font-medium text-[#4B2A17]">Monty Bhai - 📞+91 90799 42112</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-[#3C2A21]">📍 Address</h3>
            <p className="text-sm text-[#4B2A17] leading-relaxed">
              F-1412-1413, 1st Floor,<br />
              Globale Textile Market,<br />
              Umarwada, Surat - 395 010.
            </p>
            <p className="mt-2 text-sm font-semibold text-[#4B2A17]">GSTIN: 24CWLPP6315A1ZQ</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 text-xs text-[#5A3C2D]"
        >
          &copy; {new Date().getFullYear()} Reyansh Creation. All rights reserved.
        </motion.div>
      </motion.div>
    </div>
    </>
  )
}

export default App
