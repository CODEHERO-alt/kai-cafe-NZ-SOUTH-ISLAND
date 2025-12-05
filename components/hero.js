import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#4A90E2] to-[#7ED321]">
      <Image
        src="https://images.unsplash.com/photo-1559054663-8b6b5c2b9c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" // HD cafe exterior
        alt="Norka's Kai Cafe Exterior"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white z-10"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Norka's Kai Cafe</h2>
        <p className="text-xl md:text-2xl mb-8">Fresh Kiwi flavors with stunning lake views in Te Anau.</p>
        <a href="#menu" className="bg-[#F5A623] text-white px-8 py-4 rounded-full hover:bg-[#D0021B] transition">View Menu</a>
      </motion.div>
    </section>
  );
}
