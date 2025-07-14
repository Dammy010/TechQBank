import React from 'react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 text-center mb-10">
        About TechQBank
      </h1>

      <section className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>TechQBank</strong> is your all-in-one resource for mastering technical interviews. We offer a well-structured collection
          of interview questions and answers across key tech categories like frontend, backend, databases, algorithms, and more.
          Whether you're a beginner or brushing up for a big FAANG interview, TechQBank helps you focus, practice, and excel.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">The Problem It Solves</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>
            ❌ <strong>Scattered Resources:</strong> Interview prep often requires jumping between blogs, videos, and courses.
            TechQBank brings everything together in one clean interface.
          </li>
          <li>
            ❌ <strong>No Focus:</strong> It's hard to track what you’ve covered or where you’re weak. We organize questions by category so you can target what matters most.
          </li>
          <li>
            ❌ <strong>Lack of Clear Answers:</strong> Many question banks don’t provide explanations. We give you clear, beginner-friendly answers for every question.
          </li>
        </ul>
      </section>
    </div>
  );
}
