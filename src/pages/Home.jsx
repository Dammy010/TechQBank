import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen py-20 px-6">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.h1
          className="text-5xl font-extrabold text-blue-700 mb-4"
          custom={1}
          variants={fadeUp}
        >
          Ace Your Tech Interviews
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 max-w-2xl mx-auto"
          custom={2}
          variants={fadeUp}
        >
          Explore expertly curated interview questions across categories like Frontend, Backend, System Design, Algorithms, and more.
        </motion.p>

        <motion.div custom={3} variants={fadeUp}>
          <Link
            to="/questions"
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            Browse Questions
          </Link>
        </motion.div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-blue-600 text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { title: '🎯 Choose a Category', text: 'From Programming to Databases, select what area you want to master.' },
            { title: '📖 Study & Understand', text: 'Review questions and clear answers designed to sharpen your interview skills.' },
            { title: '🚀 Build Confidence', text: 'Practice regularly to strengthen your technical foundation and boost confidence.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-blue-600 text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Why Choose TechQBank?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: '🧠 Smart Organization',
              text: 'Questions are grouped by category so you can focus on your weak spots or strengthen your specialty.',
            },
            {
              title: '🔍 Real-World Relevance',
              text: 'Questions are modeled after real technical interviews from top tech companies.',
            },
            {
              title: '⚡ Fast & Simple',
              text: 'Clean UI, quick browsing, and copy-ready answers make your prep easier than ever.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
