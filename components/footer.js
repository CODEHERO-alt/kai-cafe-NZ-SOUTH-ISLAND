import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#4A90E2] text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Location</h4>
              <p>9 Lake Te Anau Hwy, Te Anau 9600, New Zealand</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Details</h4>
              <p>Phone: +64 3-249 7421</p>
              <p>Email: info@norkaskaicafe.co.nz</p>
              <p>Hours: 7:00 AM - 5:00 PM Daily</p>
              <p>Instagram: @norkaskaicafe</p>
            </div>
          </div>
          <p className="text-sm">&copy; 2023 Norka's Kai Cafe. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
