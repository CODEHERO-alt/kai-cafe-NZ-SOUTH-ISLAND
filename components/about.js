import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold text-[#4A90E2] mb-4">About Us</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Nestled in the heart of Te Anau, Norka's Kai Cafe offers a warm, inviting space to enjoy fresh, locally-sourced dishes inspired by New Zealand's rich culinary heritage. From our signature coffee to hearty meals, every bite reflects our commitment to quality and sustainability.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1559054663-8b6b5c2b9c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // HD interior
              alt="Cafe Interior"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h4 className="text-2xl font-semibold text-[#7ED321] mb-4">Our Story</h4>
            <p className="text-gray-700 mb-4">
              Founded in 2015, Norka's Kai Cafe started as a small dream to bring authentic Kiwi hospitality to travelers and locals alike. We're proud to use ingredients from local farms and support sustainable practices.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Stunning views of Lake Te Anau</li>
              <li>Fresh, seasonal menus</li>
              <li>Family-friendly atmosphere</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
