import { motion } from 'framer-motion';

export default function Reviews() {
  const reviews = [
    { name: 'John D.', text: 'Amazing views and delicious food!', rating: 5 },
    { name: 'Sarah L.', text: 'Cozy spot with great coffee.', rating: 5 },
    { name: 'Mike R.', text: 'Friendly staff and fresh ingredients.', rating: 4 },
  ];

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-[#4A90E2] mb-12"
        >
          Customer Reviews
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-[#F5A623]">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{review.text}"</p>
              <p className="font-semibold text-[#7ED321]">- {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
