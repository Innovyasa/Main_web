import React from "react";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

const Homepage: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to Innovyasa</h1>
          <p className="text-lg text-center text-gray-600">
            Explore our services, internships, courses, and more.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
