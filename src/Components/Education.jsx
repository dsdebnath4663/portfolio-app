
import React from "react";

import image from "../images/About-me.jpg";

const imageAltText = "purple and blue abstract background";

  const educationData = [
    {
      school: "WEST BENGAL BOARD OF SECONDARY EDUCATION board",
      degree: "Secondary (X)",
      year: "2018 - 2019"
  },
    {
        school: "All India Council For Technical Education (AICTE)",
        degree: "Diploma, Computer Science & Engineering",
        year: "2019 - 2021"
    },
    {
        school: "Maulana Abul Kalam Azad University Of Technology, West Bengal",
        degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering",

        year: "2021 - 2023"
    }
  ];
const Education = () => {
  return (
    <section className="padding" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Education</h2>
        <hr />
        <div className="education-container">
                {educationData.map((item, index) => (
                    <div className="education-item" key={index}>
                        <h3>{item.school}</h3>
                        <p className="degree">{item.degree}</p>
                        <p className="year">{item.year}</p>
                    </div>
                ))}
            </div>
        <hr />
        
      </div>
    </section>
  );
};

export default Education;
