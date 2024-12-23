import React from "react";
import Header from "./Header";
import CareerObjective from "./CareerObjective";
import Activities from "./Activities";
import Volunteer from "./Volunteer";
import Conference from "./Conference";
import Education from "./Education";
import Skills from "./Skills";

const Cv = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-screen-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          {/* Header */}
          <Header />

          {/* Career Objective */}
          <CareerObjective />

          {/* Skills */}
          <Skills />

          {/* Education */}
          <Education />

          {/* Extra-Curricular */}
          <Activities />
          {/* Volunteer */}
          <Volunteer />

          {/* Conference */}
          <Conference />
        </div>
      </div>
    </>
  );
};

export default Cv;
