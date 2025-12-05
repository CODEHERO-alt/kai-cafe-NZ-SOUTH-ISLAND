import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Menu() {
  const menuItems = [
    { name: 'Eggs Benedict', desc: 'Poached eggs on English muffins with hollandaise.', price: 'NZD 18', img: 'https://images.unsplash.com/photo-1559054663-8b6b5c2b9c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Kai Pancakes', desc: 'Fluffy pancakes with maple syrup and berries.', price: 'NZD 15', img: 'https://images.unsplash.com/photo-1559054663-8b6b5c2b9c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Club Sandwich', desc: 'Turkey, bacon, lettuce, and tomato on toasted bread.', price: 'NZD 20', img: 'https://images.unsplash.com/photo-1559054663-8b6b5c2b9c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Flat White Coffee', desc: 'Smooth espresso with steamed milk.', price: 'NZD 5', img: 'https://images.unsplash.com/photo-1559054663-8b6b5c2b9c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <section id="menu" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-[#4A90E2] mb-12"
        >
          Our Menu
        </motion.h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image src={item.img} alt={item.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-[#F5A623]">{item.name}</h4>
                <p className="text-gray-600 mb-2">{item.desc}</p>
                <p className="text-[#D0021B] font-bold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
