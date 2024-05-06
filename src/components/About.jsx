import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 ">
          Step into my digital realm! I'm <b>Himanshu Anand</b>, a self-taught
          full stack web developer driven by an insatiable hunger to transform
          code into immersive digital experiences. While I may not have begun my
          coding voyage with a traditional computer science background, my
          unwavering passion and dedication have been the guiding forces in my
          pursuit of mastering this craft.
        </p>
        <br />

        <p className="text-xl">
          In the whirlwind of technological advancements, I've embarked on a
          transformative journey into the realm of web development over the past
          6-8 months. 🌪️ From laying the foundation with HTML, CSS, and
          JavaScript to sculpting interactive user interfaces with React.js, my
          pursuit of mastery knows no bounds. 💻 Concurrently, I've been delving
          into backend development, exploring the nuances of Node.js and
          refining my version control skills with Git and GitHub. 🚀 Beyond the
          surface, I'm sharpening my problem-solving acumen with data structures
          and algorithms in C++, while also embracing the versatility of Python.
          🐍 Fueling my journey are a series of hands-on projects, ranging from
          a React.js-powered food delivery application reminiscent of Swiggy to
          API-driven creations like a weather app. ☀️ With each project, I
          strive not only for technical proficiency but also for innovation and
          ingenuity, pushing the boundaries of what's possible in the realm of
          full-stack web development. 💡
        </p>
      </div>
    </div>
  );
};

export default About;
