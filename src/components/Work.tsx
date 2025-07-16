import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  const projects = [
    {
      name: "CloakRoom",
      category: "Secured ChatRoom",
      tools: "Next, Node, Express, Redis, Socket.IO, PostgreSQL",
      image: "/images/clockRoom.png",
      github: "https://github.com/madhuramkulshrestha123/Cloak-Room",
    },
    {
      name: "Swaasthaya",
      category: "Hospital Management System",
      tools: "React, Go, Redis, Kafka, PostgreSQL",
      image: "/images/swas.png",
      github: "https://github.com/madhuramkulshrestha123/Swaasthya",
    },
    {
      name: "Profinder ChatBot",
      category: "Price Prediction Chatbot",
      tools: "Python, Flask, Randomforest, OpenAI API",
      image: "/images/profinder.jpg",
      github: "https://github.com/madhuramkulshrestha123/Profinder_chatbot_7",
    },
    {
      name: "VideoTube",
      category: "Streaming Platform Backend",
      tools: "Node.js, Express, MongoDB, JWT, Cloud",
      image: "/images/yt.png",
      github: "https://github.com/madhuramkulshrestha123/Videotube",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />

              {/* GitHub Button */}
              <div className="work-button">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button>GitHub</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
