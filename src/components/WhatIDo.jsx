import React from "react";

function WhatIDo() {
    const tags = [
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "Next.js",
      "Express.js",
      "MongoDb",
      "MariaDb",
      "AWS",
      "Firebase",
      "Netlify",
      "Render",
      "Vercel",
      "GIT",
    ];
  
    const tags2 = [
      "Tailwind Css",
      "Boostrap",
      "Material-UI",
      "WordPress",
      "WIX",
      "Blender",
      "PremierPro",
    ];
  
    return (
      <section
        id="skills"
        className="bg-[#f2f2f2] relative min-h-screen py-10 md:py-16 xl:py-20 px-5 md:px-10 xl:px-20 flex flex-col justify-center"
      >
        <div className="text-center xl:text-left mb-16 md:mb-20 xl:mb-50">
          <h1 className="text-6xl xl:text-[80px] font-semibold">
            <span className="italic gilroy">WHAT</span>{" "}
            <span className="bg-gradient-to-r from-[#9932cc] to-[#0000EE] bg-clip-text text-transparent gilroy">
              I DO
            </span>
          </h1>
        </div>
        
        <div className="block md:hidden">
          <div className="what-content-in">
            <p className="text-sm mb-4 neue-machina">
              <span className="font-semibold text-[#ff0000] neue-machina">
                Develop:{" "}
              </span>
              "I build scalable, high-performance web applications using modern
              technologies."
            </p>
  
            <h5 className="text-sm tracking-[1px] opacity-80 mb-2 neue-machina">
              Skillset & tools
            </h5>
  
            <div className="flex flex-wrap gap-1.5 mb-20">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="text-xs font-normal px-2 py-0.5 bg-black/5 border border-black/20 rounded-[30px] text-black neue-machina"
                >
                  {tag}
                </div>
              ))}
            </div>
  
            <p className="text-sm mb-4 neue-machina">
              <span className="font-semibold text-[#ff0000] neue-machina">
                Design:{" "}
              </span>
              "I craft intuitive and visually appealing interfaces that elevate
              user experiences."
            </p>
  
            <h5 className="text-[12px] tracking-[1px] opacity-80 mb-2 neue-machina">
              Skillset & tools
            </h5>
  
            <div className="flex flex-wrap gap-1.5">
              {tags2.map((tag) => (
                <div
                  key={tag}
                  className="text-xs font-normal px-2 py-0.5 bg-black/5 border border-black/20 rounded-[30px] text-black neue-machina"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Large screen layout */}
        <div className="hidden md:flex flex-col xl:flex-row gap-30 xl:gap-50 mt-15">
          {/* Develop Section */}
          <div className="flex flex-col flex-1">
            <h3 className="text-5xl xl:text-6xl text-[#ff0000] mb-4 neue-machina">
              DEVELOP
            </h3>
            <p className="text-lg leading-[20px] font-light mb-4 neue-machina">
              <span className="font-semibold italic neue-machina">
                "I build scalable, high-performance web applications using modern
                technologies."
              </span>
              <br />
              <br />
              <span className="text-xl leading-[20px] font-light neue-machina">
                What began with HTML and CSS has evolved into crafting dynamic web
                experiences using JavaScript, React, Express, and Node—plus a
                touch of magic.
              </span>
            </p>
  
            <h5 className="text-sm tracking-[1px] opacity-80 mb-2 neue-machina">
              Skillset & tools
            </h5>
  
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="text-sm font-normal px-2 py-0.5 bg-black/5 border border-black/20 rounded-[30px] text-black neue-machina"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
  
          {/* Design Section */}
          <div className="flex flex-col flex-1">
            <h3 className="text-5xl xl:text-6xl text-[#ff0000] mb-4 neue-machina">
              DESIGN
            </h3>
            <p className="text-lg leading-[20px] font-light mb-4 neue-machina">
              <span className="font-semibold italic neue-machina">
                "I craft intuitive and visually appealing interfaces that elevate
                user experiences."
              </span>
              <br />
              <br />
              <span className="text-xl leading-[20px] font-light neue-machina">
                Design started as a hobby, but like all great passions, it
                gradually took over—and now, it’s an inseparable part of my
                career.
              </span>
            </p>
  
            <h5 className="text-sm tracking-[1px] opacity-80 mb-2 neue-machina">
              Skillset & tools
            </h5>
  
            <div className="flex flex-wrap gap-1.5">
              {tags2.map((tag) => (
                <div
                  key={tag}
                  className="text-sm font-normal px-2 py-0.5 bg-black/5 border border-black/20 rounded-[30px] text-black neue-machina"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default WhatIDo;
  