import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { TbNotes } from "react-icons/tb";

function Home() {
  return (
    <section
      id="home" className="flex flex-col justify-center text-white"
    >
      <div className="space-y-3 md:space-y-4">
        <h1 className="text-2xl md:text-5xl font-light">Hello! I'm</h1>
        <h2 className="text-5xl md:text-[90px] font-bold bg-gradient-to-r from-[#9b5de5] to-[#00bbf9] bg-clip-text text-transparent">
          KUNAL KUMAR
        </h2>
        <span className="block text-2xl md:text-4xl text-[#00bbf9]">
          <Typewriter
            words={["Frontend Developer", "Backend Developer", "Full Stack Developer"]}
            loop={5}
            cursor
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={2000}
          />
        </span>

        <div className="flex gap-5 md:gap-8 mt-4">
          <a
            href="https://github.com/nerdpapi"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub className="text-2xl md:text-3xl hover:text-[#facc15]" />
          </a>
          <a
            href="https://www.linkedin.com/in/kunalkmr71/"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedinIn className="text-2xl md:text-3xl hover:text-[#00bbf9]" />
          </a>
          <a
            href="https://x.com/kunalkmr12"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <FaXTwitter className="text-2xl md:text-3xl hover:text-gray-800" />
          </a>
          <a
            href="https://www.instagram.com/nerdpapi/"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <FaInstagram className="text-2xl md:text-3xl hover:text-[#E4405F]" />
          </a>
        </div>
        <div className="flex items-center mt-6">
          <a
            href="https://drive.google.com/file/d/1RRika9p1LLw1kyy4RTnx6Pd93LMZ_q-k/view?usp=sharing"
            target="_blank"
            className="flex items-center space-x-2 text-lg font-semibold hover:text-[#f87171] transition-colors"
          >
            <TbNotes className="text-2xl md:text-3xl" />
            <span className="text-2xl md:text-3xl">Resume</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-30 left-0 right-0 text-center text-sm md:text-lg text-gray-300 px-6 italic">
        //. Transforming pixels into purposeful experiences — a creative designer & developer
        focused on crafting interactive, visually refined, and fully responsive digital products. //
      </div>
    </section>
  );
}

export default Home;
