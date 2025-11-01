import React from "react";
function Career() {
    return (
      <section id="career" className="bg-[#f2f2f2] relative min-h-screen px-5 md:px-10 xl:px-20 flex flex-col justify-center"
      >
          <h2 className="text-4xl md:text-5xl xl:text-[80px] font-semibold md:font-normal bg-gradient-to-t from-[#9932cc] to-[#0000EE] bg-clip-text text-transparent leading-10 xl:leading-[70px] gilroy text-center mt-15 mb-10 xl:mb-20">
            My career &<br /> experience
          </h2>
  
          <div className="relative flex flex-col">
  
            <div className="flex flex-col gap-5 md:gap-20 mx-6">
              
              <div className="flex flex-col lg:flex-row justify-between gap-1 md:gap-5 xl:gap-60">
                <div className="flex flex-col sm:flex-row md:gap-5 xl:gap-100">
                  <div className="career-role">
                    <h1 className="text-xl md:text-3xl lg:text-3xl font-medium md:font-normal leading-6 w-75 md:w-100 ClashDisplay">
                      Associate HR Consultant
                    </h1>
                    <h2 className="text-base md:text-2xl font-medium ClashDisplay bg-gradient-to-t from-[#9932cc] to-[#0000EE] bg-clip-text text-transparent">
                      3M Corporate Solutions
                    </h2>
                  </div>
                  <h3 className="text-base md:text-3xl lg:text-3xl font-normal ClashDisplay">
                    2022
                  </h3>
                </div>
                <p className="text-base md:text-2xl lg:text-2xl font-normal leading-6 ClashDisplay text-left hidden md:block">
                  Spearheaded end-to-end recruitment for IT and non-IT mid-to-senior roles, while also designing and maintaining{" "}
                  <span className="italic font-medium ClashDisplay">company’s</span> website frontends with seamless data migrations.
                </p>
                <p className="text-base font-normal leading-6 w-75 text-left block md:hidden">
                  <span className="italic font-medium ClashDisplay">
                    Spearheaded senior IT & non-IT hiring; developed company's frontends.
                  </span>
                </p>
              </div>

              <div className="flex flex-col lg:flex-row justify-between gap-1 md:gap-5 xl:gap-60">
                <div className="flex flex-col sm:flex-row md:gap-5 xl:gap-100">
                  <div className="career-role">
                    <h1 className="text-xl md:text-3xl lg:text-3xl font-medium md:font-normal leading-6 w-75 md:w-100 ClashDisplay">
                      Full-Stack Developer<br /> (Trainee)
                    </h1>
                    <h2 className="text-base md:text-2xl font-medium ClashDisplay bg-gradient-to-t from-[#9932cc] to-[#0000EE] bg-clip-text text-transparent">
                      AlmaBetter
                    </h2>
                  </div>
                  <h3 className="text-base md:text-3xl lg:text-3xl font-normal ClashDisplay">2024</h3>
                </div>
                <p className="text-base md:text-2xl lg:text-2xl font-normal leading-6 ClashDisplay text-left hidden md:block">
                  Trained in the <span className="font-medium ClashDisplay">MERN</span> stack through hands-on projects, focusing on building responsive web applications and mastering both frontend and backend development.
                </p>
                <p className="text-base font-normal leading-6 w-75 text-left block md:hidden">
                  <span className="italic font-medium ClashDisplay">
                    Built responsive full-stack web apps with the MERN stack.
                  </span>
                </p>
              </div>
  
              <div className="flex flex-col lg:flex-row justify-between gap-1 md:gap-5 xl:gap-60">
                <div className="flex flex-col sm:flex-row md:gap-5 xl:gap-100">
                  <div className="career-role">
                    <h1 className="text-xl md:text-3xl lg:text-3xl font-medium md:font-normal leading-6 w-75 md:w-100 ClashDisplay">
                      Freelance<br className="hidden md:block" /> & Upskilling
                    </h1>
                    <h2 className="text-base md:text-2xl font-medium ClashDisplay bg-gradient-to-t from-[#ff2a00] to-[#ff00ee] bg-clip-text text-transparent">
                      Freelance
                    </h2>
                  </div>
                  <h3 className="text-base md:text-3xl lg:text-3xl ClashDisplay text-red-500">NOW</h3>
                </div>
                <p className="text-base md:text-2xl lg:text-2xl font-normal leading-6 ClashDisplay text-left hidden md:block">
                  Built personal and client projects while continuously learning modern web technologies and improving full stack development skills.
                </p>
                <p className="text-base font-normal leading-6 w-75 text-left block md:hidden">
                  <span className="italic font-medium ClashDisplay">
                    Built projects while upskilling in modern full-stack development.
                  </span>
                </p>
              </div>
  
            </div>
          </div>
      </section>
    );
  }
  
  export default Career;
  