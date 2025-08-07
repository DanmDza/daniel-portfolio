import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Code,
  Database,
  Palette,
  Server,
  Award,
  GraduationCap,
  Briefcase,
  Download,
} from "lucide-react";
import "./App.css";

// Import images
import profilePic from "./assets/profile-pic.png";
import aboutPic from "./assets/about-pic.png";
import project1 from "./assets/project-1.png";
import project2 from "./assets/project-2.png";
import project3 from "./assets/project-3.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, NextJS, TypeScript, HTML5, CSS3, Tailwind CSS",
      technologies: ["React", "NextJS", "TypeScript", "Tailwind"],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Node.js, Python, C++, Java, REST APIs",
      technologies: ["Node.js", "Python", "C++", "Java"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Cloud",
      description: "MySQL, Firebase, AWS S3, Supabase, Docker",
      technologies: ["MySQL", "Firebase", "AWS", "Docker"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Tools",
      description: "Figma, Git, GitHub, VSCode, UI/UX Design",
      technologies: ["Figma", "Git", "VSCode", "UI/UX"],
    },
  ];

  const projects = [
    {
      title: "Hustle - Mobile Gig App",
      description:
        "Built mobile app (iOS/Android) for posting and completing quick-gig jobs with secure authentication, job filters, and AWS S3 image uploads in React Native. Won 1st place in Penn State Harrisburg's 2025 Capstone Design Conference.",
      image: project1,
      technologies: ["React Native", "AWS S3", "Socket.io", "NLP"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "AI Chatbot Platform",
      description:
        "Developed an AI chatbot project with a dynamic table component, enhancing user interaction and support. Created front-end features using React, optimizing performance and user experience.",
      image: project2,
      technologies: ["React", "Python", "Tailwind", "AI/ML"],
      github: "#",
      demo: "#",
    },
    {
      title: "Electronic Visit Verification (EVV) Platform",
      description:
        "Developed a HIPAA-compliant Electronic Visit Verification platform for home healthcare providers with geofencing, timestamp validation, and audit-ready documentation.",
      image: project3,
      technologies: ["React", "Node.js", "HIPAA", "Geofencing"],
      github: "#",
      demo: "#",
    },
  ];

  const experience = [
    {
      title: "Software Developer Intern",
      company: "EG India",
      location: "Mangaluru, KA, India",
      period: "July 2024 – Aug 2024",
      description:
        "Collaborated with a cross-functional team to design and implement a dynamic table component, enhancing user experience and data visualization for an AI chatbot application.",
    },
  ];

  const education = {
    degree: "B.S. in Computer Science",
    school: "Pennsylvania State University",
    period: "Expected May 2025",
    coursework: [
      "Computer Organization and Architecture",
      "Programming and Computation II: Data Structures",
      "Net-Centric Computing",
      "Object Oriented Programming with Web-Based Applications",
    ],
  };

  const certifications = [
    "Google IT Support Professional Certificate",
    "Google IT Automation with Python Professional Certificate",
    "IBM Data Science Professional Certificate",
    "Red Cross CPR/First Aid/AED",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary">
              danielmarcdsouza
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors hover:text-primary ${
                      activeSection === item
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-2 capitalize hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center hero-gradient"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 fade-in-up">
            <img
              src={profilePic}
              alt="Daniel Marc D'Souza"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary glow-effect"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient fade-in-up">
            Daniel Marc D'Souza
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 fade-in-up">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto fade-in-up">
            A Computer Science student at Penn State University that graduated
            in May 2025. With hands-on experience as a Software Developer Intern
            at EG India, I've worked on AI chatbot applications and dynamic user
            interfaces using React, Python, and Tailwind CSS. I'm currently
            working on a project that makes a real impact, the Electronic Visit
            Verification (EVV) Platform, which is a HIPAA-compliant healthcare
            platform for healthcare providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open("/DanielMarcD_Souza-Resume.pdf", "_blank")
              }
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="w-4 h-4 mr-2" /> Download Resume
            </Button>
          </div>
          <div className="mt-12">
            <ChevronDown
              className="w-6 h-6 mx-auto text-muted-foreground animate-bounce"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={aboutPic}
                alt="Daniel at restaurant"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                Hello, I'm Daniel
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science student at Pennsylvania State
                University that graduated in May 2025. With hands-on experience
                as a Software Developer Intern at EG India, I've worked on AI
                chatbot applications and dynamic user interfaces using React,
                Python, and Tailwind CSS.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My recent capstone project "Hustle" - a mobile gig economy app -
                won 1st place at Penn State Harrisburg's 2025 Capstone Design
                Conference and also recieved $1000 in funding at the Harrisburg
                LaunchBox Pitch Competition as a startup.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently working on creating solutions that make a real
                impact, in the form of a HIPAA-compliant healthcare platform for
                healthcare providers that smoothens their daily tasks and
                processes.
              </p>

              {/* Education */}
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold">Education</h4>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h5 className="font-semibold">{education.degree}</h5>
                  <p className="text-primary">{education.school}</p>
                  <p className="text-sm text-muted-foreground">
                    {education.period}
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold">Experience</h4>
                </div>
                {experience.map((exp, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg border">
                    <h5 className="font-semibold">{exp.title}</h5>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location} • {exp.period}
                    </p>
                    <p className="text-sm mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="card-hover bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg border text-center"
                >
                  <p className="text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`card-hover bg-card border-border overflow-hidden ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="aspect-video project-image flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.featured && (
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to chat about
            technology, feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:danielmarcdsouza@gmail.com"
              className="flex flex-col items-center gap-4 p-6 bg-card rounded-lg border hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">
                  danielmarcdsouza@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/daniel-marc-d-souza/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-card rounded-lg border hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">
                  daniel-marc-d-souza
                </p>
              </div>
            </a>

            <a
              href="#"
              className="flex flex-col items-center gap-4 p-6 bg-card rounded-lg border hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">GitHub</h3>
                <p className="text-sm text-muted-foreground">
                  View my repositories
                </p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Phone: +1 (610) 816-3420
            </p>
            <Button
              onClick={() => window.open("mailto:danielmarcdsouza@gmail.com")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Daniel Marc D'Souza. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
