import React from "react";

const Volunteer = () => {
  return (
    <>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Volunteer</h2>
        <p className="text-gray-600 mt-2">
          Teaching to the village child whose parents were not educated to help
          their studies.
        </p>
        <p className="text-gray-600 mt-2">2004 - 2012</p>
      </section>

      <section>
        <div className="mt-6">
          <h3 className="md:text-xl font-semibold text-gray-800">IELTS</h3>
          <p className="text-gray-600">
            Lexicon-British Council IELTS Test Center
          </p>
          <p>2024</p>
        </div>

        <div className="mt-6">
          <h3 className="md:text-xl font-semibold text-gray-800">
            English for Adult Learner (EAL)
          </h3>
          <p className="text-gray-600">
            Lexicon-British Council IELTS Test Center
          </p>
          <p>2022</p>
        </div>

        <div className="mt-6">
          <h3 className="md:text-xl font-semibold text-gray-800">
            Dress Making and Tailoring
          </h3>
          <p className="text-gray-600">Bangladesh Technical Education Board</p>
          <p>2021</p>
        </div>

        <div className="mt-6">
          <h3 className="md:text-xl font-semibold text-gray-800">
            Entrepreneurship
          </h3>
          <p className="text-gray-600">
            BSCIC Training Institute (Former SCITI)
          </p>
          <p>2019</p>
        </div>
      </section>
    </>
  );
};

export default Volunteer;
