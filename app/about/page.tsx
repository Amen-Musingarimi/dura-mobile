import React from 'react';

const About = () => {
  return (
    <section className="w-screen mt-12 mb-12">
      <div className="flex flex-1 justify-start items-center flex-col gap-6">
        <h5 className="font-bold text-4xl">Activities</h5>
        <p className="text-2xl uppercase font-light">
          EduHub Institute Of Technology
        </p>
        <p className="w-3/5 text-center text-2xl font-cursive">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          atque exercitationem rem dolorem neque, maiores ipsam temporibus
          similique nisi laudantium debitis quae et fugiat, suscipit rerum
          iusto, vel earum iure.
        </p>
        <div className="flex justify-center items-center gap-6">
          <img
            className="w-1/4 shadow-lg hover:shadow-2xl"
            src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_640.jpg"
            alt="libraryImage"
          />
          <img
            className="w-1/4 shadow-lg hover:shadow-2xl"
            src="https://cdn.pixabay.com/photo/2016/05/18/11/25/library-1400312_1280.jpg"
            alt="lectureRoomImage"
          />
          <img
            className="w-1/4 shadow-lg hover:shadow-2xl"
            src="https://cdn.pixabay.com/photo/2016/03/26/17/45/teacher-1280966_1280.jpg"
            alt="teacherImage"
          />
        </div>
        <button className="border-red-500 border-2 p-2 rounded-md">
          View More
        </button>
      </div>
    </section>
  );
};

export default About;
