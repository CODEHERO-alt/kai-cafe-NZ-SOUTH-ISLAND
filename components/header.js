import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Image src="/logo.svg" alt="Norka's Kai Cafe Logo" width={50} height={50} />
          <h1 className="ml-2 text-2xl font-bold text-[#4A90E2]">Norka's Kai Cafe</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-[#F5A623] hover:text-[#4A90E2]">About</a>
          <a href="#menu" className="text-[#F5A623] hover:text-[#4A90E2]">Menu</a>
          <a href="#reviews" className="text-[#F5A623] hover:text-[#4A90E2]">Reviews</a>
          <a href="#contact" className="text-[#F5A623] hover:text-[#4A90E2]">Contact</a>
        </nav>
      </div>
    </header>
  );
}
