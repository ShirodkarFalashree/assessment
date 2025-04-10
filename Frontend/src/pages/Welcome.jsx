import React from 'react';

const Welcome = () => {
  return (
    <section className="bg-transparent h-[82vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-[#6c00af] mb-4">
        Welcome to <span className="text-[#7806c0]">FAVstudies</span>
      </h1>
      <p className="text-gray-600 max-w-xl text-lg md:text-xl">
        We build beautiful websites, stunning graphics, and powerful digital solutions that bring your brand to life.
      </p>
    </section>
  );
};

export default Welcome;
