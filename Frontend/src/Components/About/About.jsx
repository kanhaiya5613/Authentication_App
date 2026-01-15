import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About This Project
        </h1>

        {/* Intro */}
        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12">
          This is a full-stack authentication-based web application built with
          <span className="text-white font-semibold"> React</span>,
          <span className="text-white font-semibold"> Node.js</span>, and
          <span className="text-white font-semibold"> MongoDB</span>. The goal of
          this project is to learn real-world authentication, state management,
          and UI design using modern tools.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">🚀 Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>User Registration & Login</li>
              <li>JWT Authentication with Cookies</li>
              <li>Protected Routes</li>
              <li>User Profile & Logout</li>
              <li>Rock Paper Scissors Game</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">🛠 Tech Stack</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Frontend: React + Vite</li>
              <li>Styling: Tailwind CSS</li>
              <li>Backend: Node.js & Express</li>
              <li>Database: MongoDB</li>
              <li>Auth: JWT & Cookies</li>
            </ul>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-gray-400 mt-16">
          Built with ❤️ By Kanhaiya Kumar.
        </p>
      </div>
    </section>
  );
};

export default About;