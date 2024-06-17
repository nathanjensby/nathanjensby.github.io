import React from "react";

const About = () => {
  const aboutItems = [{}];
  return (
    <section id="about" className="w-full">
      <h2>About me</h2>
      <div className="flex flex-col lg:flex-row ">
        <div className="w-auto">Image</div>
        <div className="w-auto">Family</div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row ">
        <div className="w-auto">Occupation</div>
        <div className="w-auto">Image</div>
      </div>
      <div className="flex flex-col lg:flex-row ">
        <div className="w-auto">Image</div>
        <div className="w-auto">Recreation</div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row ">
        <div className="w-auto">Motivation</div>
        <div className="w-auto">Image</div>
      </div>
    </section>
  );
};

export default About;
