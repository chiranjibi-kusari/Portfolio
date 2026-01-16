import React from "react";

const About = () => {
  return (
    <>
      <div
        name="About"
        className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className="text-5xl font-bold">About</h1>
        {/*<p className=' text-lg mt-3'>Hello, iam Chiranjibi Kusari from Nepal. Iam passionate about building accessible website and user-friendly interface. I can Develope a responsive web application for managing customer data using React. I specialize in creating responsive, high-performance web interfaces using modern technologies like React. My goal is to deliver seamless user experiences that delight users and drive engagement. I can significantly enhance a team's capabilities, bringing new ideas. Focusing on both their technical and soft skills, along with proper onboarding and continuous learning, can ensure their successful integration and contribution to the team. I attention to detail and commitment to user experience is outstanding.</p>*/}

        <p className=" text-xl mt-3">
          I'm a passionate Full Stack Developer with expertise in building
          robust, scalable web applications. With a keen eye for detail and a
          commitment to clean code, I bridge the gap between frontend aesthetics
          and backend functionality to deliver seamless digital experiences that
          drive results.I can significantly enhance a team's capabilities,
          bringing new ideas. Focusing on both their technical and soft skills,
          along with proper onboarding and continuous learning, can ensure their
          successful integration and contribution to the team. I attention to
          detail and commitment to user experience is outstanding.
        </p>
        <div className=" flex justify-between">
          <div className="text-center md:text-start">
            <h2 className="text-4xl font-bold mt-8 mb-3">Technical Skills:</h2>
            <div className="flex gap-10">
              <div className=" ">
                <h1 className="text-3xl font-semibold mb-2">Frontend</h1>
                <h3 className="text-2xl">- HTML</h3>
                <h3 className="text-2xl">- CSS</h3>
                <h3 className="text-2xl">- Tailwind CSS</h3>
                <h3 className="text-2xl">- JavaScript</h3>
                <h3 className="text-2xl">- React</h3>
                <h3 className="text-2xl">- Next.js</h3>
                <h3 className="text-2xl">- TypeScript</h3>
              </div>
              <div>
                <h1 className="text-3xl font-semibold mb-2">Backend</h1>
                <h3 className="text-2xl">- Node js</h3>
                <h3 className="text-2xl">- Express</h3>
              </div>
              <div>
                <h1
                  className="text-3xl font-semibold mb-2
                "
                >
                  DataBase
                </h1>
                <h3 className="text-2xl">- MongoDb</h3>
                <h3 className="text-2xl">- PostgreSQL</h3>
              </div>
            </div>
          </div>

          <div className="text-center md:text-start">
            <h2 className="text-4xl font-bold mt-8 mb-3">Education:</h2>
            <h1 className="text-2xl font-bold ml-6">+2 (Science): </h1>
            <p className=" ml-20 text-xl">
              Liverpool International College, New Baneshwar, Kathmandu
            </p>

            <h1 className="text-2xl font-bold ml-6">
              Bachelor (Information Technology):{" "}
            </h1>
            <p className="text-xl ml-20">
              Texas International College, Chabahil, Kathmandu
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
