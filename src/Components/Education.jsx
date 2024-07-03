
import React from "react";

import image from "../images/About-me.jpg";

const imageAltText = "purple and blue abstract background";

  const educationData = [
    {
        school: "Harvard University",
        degree: "Bachelor of Science in Computer Science",
        year: "2015 - 2019"
    },
    {
        school: "MIT",
        degree: "Master of Science in Artificial Intelligence",
        year: "2019 - 2021"
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
