import React from 'react';

const skills = [
  'Python',
  'HTML',
  'JavaScript',
  'React.js',
  'CSS',
  'C++',
  'Node.js',
  'MATLAB',
  'Verilog',
];

const About = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col"> {/* Set the wrapper to min-height 100vh and flex column */}
      <section id="about" className="flex-grow overflow-x-hidden bg-gray-100">
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">More about me</h1>
          <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
            <p>A passionate web developer with a strong proficiency in frontend and full-stack technologies, I am dedicated to crafting user-centric, responsive, and efficient web applications. My technical expertise spans across JavaScript, HTML, CSS, React, and various modern frameworks, ensuring high-quality web development solutions. I am deeply passionate about coding and have actively pursued it as a significant interest.</p>
            <p>Beyond academics, I have participated in various sports tournaments, including cricket and badminton, in my institute. During my tenure as the Music Club Coordinator, I successfully organized and conducted over 25 events and jamming sessions, showcasing my leadership and organizational skills. Additionally, I have a keen interest in video editing and manage content for my personal YouTube channel. As part of the core sponsorship team for YUVAAN'24, the annual cultural fest of IIIT Guwahati, I contributed to its success while also engaging in stage volunteering for numerous events. These experiences reflect my versatility, teamwork, and dedication to both creative and professional pursuits.</p>
            </div>
            <h1 className="text-4xl font-bold text-center py-5 mb-10">Education</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
                <h5 className="text-xl font-semibold">2021-2025</h5>
                <h5 className="text-lg font-semibold mt-2">
                  Indian Institute of Information Technology Guwahati
                </h5>
                <h4 className="text-md font-semibold mt-2">
                  Electronics and Communication Engineering (ECE)
                </h4>
                <p className="text-sm mt-2">B.Tech Grade: 8.56</p>
              </div>
              <div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg">
                <h5 className="text-xl font-semibold">2019</h5>
                <h5 className="text-lg font-semibold mt-2">Sri Chaitanya Techno School</h5>
                <p className="text-sm mt-2">Percentage: 95%</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-5 text-center">Skills</h2>
        <div className="flex w-screen flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md text-center w-32 mb-4 sm:w-40 lg:w-48"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 w-screen text-white py-2">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Pallela Sarath Chandhan</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
