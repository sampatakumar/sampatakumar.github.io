import ProfileCard from '../components/ProfileCard.tsx'
import ScrambledText from '../components/ScrambledText.tsx'
import DecryptedText from '../components/DecryptedText.tsx'
import CurvedLoop from '../components/CurvedLoop.tsx'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { DiJavascript1 } from "react-icons/di";
import '../styles/home.css'

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HOME / HERO ================= */}

      <section
        id="home"
        className="
        min-h-screen
        flex
        items-center
        px-6
        lg:px-20
        py-20
        "
      >

        <div
          className="
          w-full
          max-w-7xl
          mx-auto
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          justify-between
          gap-12
          lg:gap-24
          "
        >

          {/* LEFT CONTENT */}

          <div
            className="
            flex
            flex-col
            max-w-2xl
            gap-8
            text-center
            lg:text-left
            "
          >

            <h1 className="font-bold leading-tight text-4xl sm:text-5xl lg:text-7xl">

              <DecryptedText text="Hi there! I am " />

              <DecryptedText
                text="Sampatakumar V"
                speed={150}
                sequential
                animateOn="inViewHover"
              />

            </h1>


            <div className="text-gray-300 text-base sm:text-lg lg:text-xl leading-8">

              <DecryptedText
                text="
                A passionate software developer with a strong
                interest in creating modern web applications
                and solving real-world problems through code.
                I enjoy learning new technologies and building
                clean and engaging experiences.
                "
              />

            </div>


            {/* BUTTONS */}

            <div
              className="
              flex
              flex-wrap
              gap-4
              justify-center
              lg:justify-start
              "
            >

              <button
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/sampatakumar-sv",
                    "_blank"
                  )
                }
                className="
                flex items-center gap-2
                px-6 py-3
                rounded-xl
                border border-gray-700
                hover:bg-white
                hover:text-black
                transition-all duration-300
                btn-primary
                "
              >
                <FaLinkedin size={20} />
                LinkedIn
              </button>


              <button
                onClick={() =>
                  window.open(
                    "https://github.com/sampatakumar",
                    "_blank"
                  )
                }
                className="
                flex items-center gap-2
                px-6 py-3
                rounded-xl
                border border-gray-700
                hover:bg-white
                hover:text-black
                transition-all duration-300
                btn-primary
                "
              >
                <FaGithub size={20} />
                GitHub
              </button>

            </div>

          </div>


          {/* RIGHT PROFILE CARD */}

          <div className="scale-90 lg:scale-100">

            <ProfileCard
              name="Sampatakumar V"
              title="Software Engineer"
              handle="sampatakumar_sv"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/avatar.png"
              iconUrl="/brands/github.svg"
              showUserInfo
              enableTilt
              enableMobileTilt
              behindGlowEnabled
              behindGlowColor="rgba(150,190,255,0.67)"
              innerGradient="
              linear-gradient(
              145deg,
              #60496e8c 0%,
              #71C4FF44 100%
              )"
              onContactClick={() =>
                window.location.href =
                "mailto:wlcmdevilworld@gmail.com"
              }
            />

          </div>

        </div>

      </section>


      <hr className="border-gray-700 w-[90%] mx-auto" />


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="px-6 lg:px-20 py-24"
      >

        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-14">
          About Me
        </h1>

        <div className="flex justify-center">

          <ScrambledText
            className="
            w-full
            max-w-4xl
            whitespace-pre-line
            text-sm
            sm:text-base
            lg:text-lg
            text-gray-300
            leading-8
            lg:leading-10
            p-6
            lg:p-10
            rounded-3xl
            bg-gray-900/40
            backdrop-blur-lg
            border border-gray-700
            text-justify
            "
            radius={50}
            duration={1.2}
            speed={0.8}
            scrambleChars=".:"
          >
{`
I am a passionate software engineering student dedicated to building clean, modern, and efficient web applications. I love diving into new technologies, solving complex problems, and turning creative ideas into impactful digital experiences.

Driven by curiosity and a commitment to continuous growth, I enjoy experimenting with new frameworks and tackling challenges that push my boundaries. My ultimate goal is to become a skilled software engineer who creates innovative solutions and makes a positive impact through code.
`}
          </ScrambledText>

        </div>

      </section>


      <hr className="border-gray-700 w-[90%] mx-auto" />


      {/* ================= SKILLS ================= */}

     {/* ================= SKILLS ================= */}

<section
  id="skills"
  className="px-6 lg:px-20 py-24"
>

  <h1 className="text-3xl lg:text-5xl font-bold text-center mb-14">
    Skills
  </h1>

  {/* Skill Card */}

  <div className="w-full max-w-5xl mx-auto">

    <ScrambledText
      className="
      whitespace-pre-line
      text-base lg:text-lg
      text-gray-300
      leading-8
      p-8
      rounded-3xl
      bg-gray-900/40
      backdrop-blur-lg
      border border-gray-700
      "
      radius={50}
      duration={1.2}
      speed={0.8}
      scrambleChars=".:"
    >
{`• Proficient in JavaScript, TypeScript, and Python`}
<br />
{`• Strong understanding of software development principles`}
<br />
{`• Passionate about learning modern technologies`}
<br />
{`• Familiar with MongoDB and PostgreSQL`}
<br />
{`• Experience with React, Next.js, and Node.js`}

    </ScrambledText>

  </div>

  {/* Icons */}

  <div
    className="
    flex
    justify-center
    gap-8
    text-5xl
    mt-12
    flex-wrap
    "
  >

    <DiJavascript1 />
    <FaGithub />

  </div>

  {/* Skill Marquee */}

  <div className="mt-10">

    <CurvedLoop
      marqueeText="
      | JavaScript |
      React |
      TypeScript |
      MongoDB |
      Python |
      Node.js |
      "
      speed={0.8}
      curveAmount={0}
      direction="right"
      interactive
      className="custom-text-style"
    />

  </div>

</section>

<hr className="border-gray-700 w-[90%] mx-auto" />

{/* ================= PROJECTS ================= */}

<section
  id="projects"
  className="px-6 lg:px-20 py-24"
>

  <h1 className="text-3xl lg:text-5xl font-bold text-center mb-14">
    Project Showcase
  </h1>

  <div
    className="
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-8
    max-w-7xl
    mx-auto
    "
  >

    {/* Project Card 1 */}

    <div
      className="
      rounded-3xl
      overflow-hidden
      bg-gray-900/40
      border border-gray-700
      backdrop-blur-lg
      hover:scale-105
      transition-all
      duration-500
      "
    >

      <img
        src="/project1.png"
        alt="Project"
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold mb-3">
          Smart Skill HubX
        </h2>

        <p className="text-gray-300 text-sm leading-7">
          AI-powered learning platform that recommends
          personalized learning paths and skill development.
        </p>

        <div className="flex gap-2 mt-4 flex-wrap">

          <span className="px-3 py-1 rounded-full bg-purple-500/20">
            React
          </span>

          <span className="px-3 py-1 rounded-full bg-blue-500/20">
            Node.js
          </span>

          <span className="px-3 py-1 rounded-full bg-green-500/20">
            MongoDB
          </span>

        </div>

        <div className="flex gap-4 mt-6">

          <button
            className="
            px-4 py-2
            rounded-xl
            border
            border-gray-600
            hover:bg-white
            hover:text-black
            "
          >
            Live Demo
          </button>

          <button
            className="
            px-4 py-2
            rounded-xl
            border
            border-gray-600
            hover:bg-white
            hover:text-black
            "
          >
            GitHub
          </button>

        </div>

      </div>

    </div>


    {/* Project Card 2 */}

    <div className="rounded-3xl bg-gray-900/40 border border-gray-700 p-6 backdrop-blur-lg hover:scale-105 transition">

      <h2 className="text-2xl font-bold">
        Agriculture E-Commerce
      </h2>

      <p className="mt-4 text-gray-300">
        Online platform for farmers and customers
        to buy and sell agricultural products.
      </p>

    </div>


    {/* Project Card 3 */}

    <div className="rounded-3xl bg-gray-900/40 border border-gray-700 p-6 backdrop-blur-lg hover:scale-105 transition">

      <h2 className="text-2xl font-bold">
        IPC Chatbot
      </h2>

      <p className="mt-4 text-gray-300">
        Intelligent chatbot designed to answer
        Indian Penal Code related questions.
      </p>

    </div>

  </div>

</section>

<hr className="border-gray-700 w-[90%] mx-auto" />

{/* ================= CONTACT ================= */}

<section
  id="contact"
  className="px-6 lg:px-20 py-24"
>

  <h1 className="text-3xl lg:text-5xl font-bold text-center mb-14">
    Contact Me
  </h1>

  <div
    className="
    w-full
    max-w-3xl
    mx-auto
    rounded-3xl
    bg-gray-900/40
    backdrop-blur-lg
    border border-gray-700
    p-6 lg:p-10
    "
  >

    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault()

        alert("Message sent!")
      }}
    >

      {/* Name */}

      <div className="flex flex-col gap-2">

        <label className="text-gray-300">
          Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          className="
          p-4
          rounded-xl
          bg-black/30
          border border-gray-700
          outline-none
          focus:border-purple-500
          "
        />

      </div>

      {/* Email */}

      <div className="flex flex-col gap-2">

        <label className="text-gray-300">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="
          p-4
          rounded-xl
          bg-black/30
          border border-gray-700
          outline-none
          focus:border-purple-500
          "
        />

      </div>

      {/* Message */}

      <div className="flex flex-col gap-2">

        <label className="text-gray-300">
          Message
        </label>

        <textarea
          rows={6}
          placeholder="Write your message..."
          className="
          p-4
          rounded-xl
          bg-black/30
          border border-gray-700
          outline-none
          resize-none
          focus:border-purple-500
          "
        />

      </div>

      {/* Submit */}

      <button
        type="submit"
        className="
        px-6
        py-4
        rounded-xl
        bg-purple-600
        hover:bg-purple-500
        transition-all
        duration-300
        font-medium
        "
      >
        Send Message
      </button>

    </form>

  </div>

</section>

    </div>
  )
}