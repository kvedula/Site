'use client'
import React from 'react';

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 font-sans">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center">🤖 Meet Kamesh Vedula's AI Agent</h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Discover Kamesh's career journey, skills, and projects — in an interactive way.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-2">🧠 Ask the GPT Agent:</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>What did Kamesh do at Redbird?</li>
              <li>Can you walk me through Kamesh’s career?</li>
              <li>What technical skills does he have?</li>
              <li>What are some side projects?</li>
              <li>What’s his leadership style?</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">📄 Resume Preview</h2>
            <iframe
              src="https://drive.google.com/file/d/1j3U4N0l3shEBfVdE90rPJ1T0NrjeAdaU/preview"
              width="100%"
              height="500"
              allow="autoplay"
              className="rounded-lg border"
            ></iframe>
            <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
              <a href="https://drive.google.com/file/d/1j3U4N0l3shEBfVdE90rPJ1T0NrjeAdaU/view?usp=sharing" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded text-center">📥 Download Resume</a>
              <a href="https://www.linkedin.com/in/kvedula1998/" target="_blank" className="px-4 py-2 border border-blue-600 text-blue-600 rounded text-center">🔗 Visit LinkedIn</a>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Built with ❤️ by Kamesh Vedula · Powered by GPT-4 · Hosted on Vercel
          </p>
        </div>
      </main>
    </>
  );
}
