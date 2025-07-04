// src/app/community/page.tsx
import React from "react";
import Navbar from "../Components/navbar";  // adjust if needed
import Footer from "../Components/footer";  // adjust if needed

export default function CommunityPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Community</h1>
          <p className="text-lg text-center text-gray-600">
            Join our vibrant community and connect with like-minded individuals.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
