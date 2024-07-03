/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Education-jpg.jpg";


const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Custom react components 🎉",
    description:
      "Custom react componentsCustom react components I have created following custom component using React ⚛️, Redux 🔁, HTML 🌐, CSS 🎨",
    url: "https://github.com/dsdebnath4663/custom-ui-components",
  },
  {
    title: "E-Commerce Application ",
    description:
      "An e-commerce app with user authentication, product catalog, shopping cart, checkout, user profiles, customer support, notifications, admin panel, and analytics using HTML5, CSS, ASP.NET MVC, and SQL.",
    url: "https://github.com/dsdebnath4663/Amazon_Clone",
  },
  {
    title: "Learning Management System",
    description:
      "Acomprehensive e-learning platform with user registration, dashboards for students and admin, course catalog, detailed course pages, assignment submission, grades, discussion forums, notifications, and profile management using React.js, Redux.js, CSS, Bootstrap, Spring Boot, Oracle DB, and JDBC.",
    url: "https://github.com/dsdebnath4663/learning-management-system",
  },
  {
    title: "Data Visuallization",
    description:
      "A comprehensive e-learning platform with data visualization using D3.js and a tech stack of React.js, Redux.js, CSS, Bootstrap, Spring Boot, Oracle DB, and JDBC.",
    url: "https://github.com/dsdebnath4663/data-visualization-dashboard",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
