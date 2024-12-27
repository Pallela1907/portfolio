import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className=" w-screen h-screen bg-blue-200 py-15 px-0">
      <div className="container h-screen overflow-y-auto mx-auto position-center justify-center text-center">
        <h2 className="text-5xl font-semibold mb-3">Recent Projects</h2>
        <div className="overflow-y-scroll grid grid-cols-2 gap-5">
          {/* Example Project */}
          <div className="p-4 bg-white shadow-lg rounded-lg">
          <a 
          href="https://github.com/Pallela1907/CineYatra" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl  font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
          CineYatra
            </a>
            <p>"        "</p>

            <img
          src="Cine.jpg"
          alt="Cine Pic"
          className="w-45 h-45  mx-auto mb-6 border-4 border-white shadow-lg"
        />

            <p className="text-gray-600">CineYatra is a dynamic movie database platform designed to provide a seamless browsing and inspection experience for over 1000 local and international films. Built with React.js for a responsive and interactive frontend and Node.js with Express.js for a robust backend, the platform delivers efficient API integration to fetch and display movie details. It features advanced search and filter options, quick navigation buttons linking to trailers and additional information, and movie-specific pages showcasing key attributes like Rating, Genre, Release Date, Synopsis, and Director. With a user-friendly interface and intuitive features like a “Back to Home” button, CineYatra ensures an engaging and hassle-free movie discovery experience.</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
          <a 
            href="https://github.com/Pallela1907/UserInSync" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              UserInSync
            </a>
            <p>"        "</p>
            <img
          src="User.png"
          alt="User Pic"
          className="w-45 h-45  mx-auto mb-6 border-4 border-white shadow-lg"
        />
            <p className="text-gray-600">UserInSync is a comprehensive user management application built with React.js, leveraging the Reqres API for seamless integration and functionality. The application features a secure authentication system, allowing users to log in using predefined credentials and storing authentication tokens for smooth transitions. Upon successful login, it displays a structured and paginated list of users, showcasing their first name, last name, and avatar in an intuitive layout. Advanced features include the ability to edit user details through pre-filled forms and update them via API, as well as a delete option to remove users from the list dynamically. With a focus on efficient API integration, responsive design, and user-centric functionalities, UserInSync delivers a robust and engaging user management experience.</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
          <a 
            href="https://pallela1907.github.io/Kanban-Board/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              KanbanBoard
            </a>
            <p>"        "</p>
            
            <img
          src="kanban.png"
          alt="Kanban Pic"
          className="w-45 h-45  mx-auto mb-6 border-4 border-white shadow-lg"
        />
            <p className="text-gray-600">Kanban Board is an intuitive front-end web application designed to streamline task management and enhance productivity. Developed using React.js and CSS, the application features six interactive web pages that offer seamless navigation and a visually appealing user experience. The project integrates with a pre-defined API to fetch and display information for five users, presenting the data in over six unique and engaging formats. With its sleek design and efficient data presentation, the Kanban Board ensures an organized and user-friendly interface for managing tasks effectively.</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
          <a 
          href="https://github.com/Pallela1907/CineYatra" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl  font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
          LoginSignUp
            </a>
            <p>"        "</p>

          <img
          src="LoginSignup.jpg"
          alt="Login Pic"
          className="w-45 h-45 border-2 border-white shadow-lg"
          />

            <p className="text-gray-600">LoginSignUp is a user authentication system built with React.js, HTML, and CSS, designed to provide a seamless login and registration experience. The application allows users to log in by entering their credentials, showing a "Login Successful" alert if the user exists or redirecting them to the signup page if not. New users can register by providing their email and password, with a built-in password strength indicator guiding them to create strong passwords. Additionally, the "Remember Me" feature enables users to save their credentials locally, ensuring auto-fill for a smoother login experience in future sessions. This project ensures a user-friendly, secure, and efficient authentication process.</p>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 w-screen text-white py-2">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Pallela Sarath Chandhan</p>
        </div>
      </footer>
    </section>
  );
};

export default Projects;
