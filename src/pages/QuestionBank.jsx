import React, { useState } from 'react';
import questions from '../data/questions';

const categories = [
  'Programming Languages',
  'Fullstack Development',
  'Frontend Development',
  'Backend Development',
  'Databases',
  'DevOps & Deployment',
  'Cybersecurity',
  'Data & Analytics',
  'Cloud Computing',
  'System Design',
  'Algorithms',
];

export default function QuestionBank() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const filteredQuestions = questions.filter((q) => {
    return selectedCategory === 'All' || q.category === selectedCategory;
  });

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Interview Question Bank</h1>

      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-4 py-2 rounded border ${
            selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded border ${
              selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredQuestions.map((q, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">{q.question}</h2>
            <p className="text-sm text-gray-500 mt-1">Category: {q.category}</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600">Show Answer</summary>
              <div className="mt-2">
                <p className="text-gray-700">{q.answer}</p>
                <button
                  onClick={() => copyToClipboard(q.answer, index)}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  {copiedIndex === index ? 'Copied!' : 'Copy Answer'}
                </button>
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
