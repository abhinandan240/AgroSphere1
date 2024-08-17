
import React from 'react';
//import './AboutUs.css';

const About = () => {
  const students = [
    { name: 'Abhinandan Bhawsar ', prn: '' },
    { name: ' Kashmira Deore', prn: '240340320050' },
    { name: ' Amit Tapase', prn: '' },
    { name: 'Ajay Chavan ', prn: '' },
    { name: ' Ashish Dharmik', prn: '' },
    { name: ' Rohit Patil', prn: '' },
  ];

  return (
    <div className="about">
      <h2>About</h2>
      <p>Meet our team of 6 students:</p>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>Name:</strong> {student.name} <br />
            <strong>PRN:</strong> {student.prn}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
