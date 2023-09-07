import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './Resume.css'; // Create a CSS file for styling

function Resume() {
    const handleDownloadResume = () => {
        // You can replace the link with your actual resume URL
        const resumeLink = 'https://drive.google.com/file/d/1-1111111111111111111111111111111111111111111111111111111111111111/view?usp=sharing';
        Swal.fire({
            title: 'Downloading Resume',
            text: 'Please wait while my resume is being downloaded...',
            icon: 'info',
            allowOutsideClick: false,
        });
        // Simulate a download delay (replace with actual download logic)
        setTimeout(() => {
            Swal.close(); // Close the loading alert
            window.open(resumeLink, '_blank', 'noopener noreferrer');
        }, 2000); // Adjust the delay as needed
    };
    return (
        <div className="resume">
            <h1>Resume</h1>
            <div className="resume-links">
                <button onClick={handleDownloadResume}>Download Resume</button>
                <div className="proficiency-list">
                    <ul>
                        <li>
                            <i className="fas fa-code"></i> HTML
                        </li>
                        <li>
                            <i className="fas fa-paint-brush"></i> CSS
                        </li>
                        <li>
                            <i className="fab fa-js"></i> JavaScript
                        </li>
                        <li>
                            <i className="fab fa-react"></i> React
                        </li>
                        <li>
                            <i className="fab fa-react"></i> Redux
                        </li>
                        <li>
                            <i className="fab fa-node"></i> Node.js
                        </li>
                        <li>
                            <i className="fab fa-node-js"></i> Express.js
                        </li>
                        <li>
                            <i className="fas fa-database"></i> MongoDB
                        </li>
                        <li>
                            <i className="fas fa-database"></i> Mongoose
                        </li>
                        <li>
                            <i className="fas fa-database"></i> MySQL
                        </li>
                        <li>
                            <i className="fab fa-git"></i> Git
                        </li>
                        <li>
                            <i className="fab fa-heroku"></i> Heroku
                        </li>
                    </ul>
                </div>
                <Link to="/portfolio">Back to Portfolio</Link>
            </div>
        </div>
    );
}
// Export the Resume component
export default Resume;