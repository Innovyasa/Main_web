import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Courses: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
          <p className="text-lg text-center text-gray-600">
            Explore a variety of courses designed to enhance your skills and knowledge.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Courses;