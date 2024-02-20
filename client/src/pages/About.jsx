
import React from 'react';
import houseImage from '../assets/house.jpg'; // Import the image
export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center'>
      {/* Image Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src={houseImage} alt="House" className="w-full rounded-lg shadow-md" />
      </div>

      {/* About Section */}
      <div className='md:w-1/2 md:pl-8'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>Welcome to Kadam Patil Estate</h1>
        <p className='mb-4 text-slate-700'>
          At Kadam Patil Estate, we're more than just a real estate agency; we're your trusted partner in finding the perfect home or renting out your valuable property. Our mission is to provide exceptional service and unparalleled satisfaction to every client.
        </p>
        <p className="mb-4 text-slate-700">
          With a team of experienced professionals and a deep understanding of the real estate market, we offer personalized solutions tailored to your unique needs and goals. Whether you're buying, selling, or renting, we're here to guide you every step of the way.
        </p>
        <p className="mb-4 text-slate-700">
          Our commitment to excellence, integrity, and innovation sets us apart. We believe in building lasting relationships with our clients based on trust, transparency, and mutual respect. When you choose Kadam Patil Estate, you can rest assured that you're in good hands.
        </p>
        <p className="mb-4 text-slate-700">
          Let us help you turn your real estate dreams into reality. Explore our platform, discover exceptional properties, and experience the difference with Kadam Patil Estate.
        </p>
      </div>
    </div>
  );
}
