import React from 'react';

const About = () => {
  return (
    <div className="min-h-[82vh] bg-transparent flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl text-center bg-white/40 backdrop-blur-xl p-10 rounded-3xl shadow-xl ">
        <h1 className="text-4xl md:text-5xl font-bold text-[#6c00af] mb-6">About FAVstudies</h1>
        <p className="text-lg text-[#4b007d] leading-relaxed mb-4">
          FAVstudies is an all-in-one assessment and learning platform designed to make studying
          smarter, not harder. Whether you're a student looking to test your knowledge or an admin
          managing assessments — we’ve got you covered.
        </p>
        <p className="text-lg text-[#4b007d] leading-relaxed mb-4">
          We aim to provide an intuitive, user-friendly interface with modern design and seamless
          navigation — no clutter, no confusion. Just clean UI and powerful tools that help you
          focus on what matters most.
        </p>
        <p className="text-lg text-[#4b007d] leading-relaxed">
          Built with love by passionate minds at FAVmedia.
        </p>
      </div>
    </div>
  );
};

export default About;
