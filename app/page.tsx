"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail, Copy, Check, ExternalLink, ArrowUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { SplineScene } from "@/components/ui/splite"

function MeshGlobe() {
  const { size } = useThree()
  const radius = useMemo(() => {
    if (size.width < 640) return 2.6
    if (size.width < 1024) return 3.6
    return 4.4
  }, [size.width])

  return (
    <Sphere args={[radius, 48, 48]}>
      <meshBasicMaterial color="#22d3ee" wireframe opacity={0.65} transparent />
    </Sphere>
  )
}

function WireframeIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smooth rotation
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3

      // Subtle pulsing effect (scale between 0.97 and 1.03)
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.03
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshBasicMaterial color="#22d3ee" wireframe opacity={0.6} transparent side={THREE.DoubleSide} />
    </mesh>
  )
}

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "C++",
  "C",
  "Swift",
  "Racket",
  "HTML/CSS",
  "SQL",
  "React",
  "Next.js",
  "Node.js",
  "AWS",
  "Firebase/Firestore",
  "MongoDB",
  "Git/GitHub",
  "Anaconda",
  "Jupyter",
]

type Project = {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "T.R.A.C.E.R",
    description:
      "Autonomous tunnel-response robot powered by multi-model AI vision and sensor fusion to detect emergencies and route two-way communication between civilians and authorities.",
    tags: ["Python", "OpenCV", "Flask", "Raspberry Pi", "Robotics", "Computer Vision"],
    github: "https://github.com/tahasinshadat/PROJECT-TRACER",
  },
  {
    title: "EdgePilot",
    description:
      "On-premises AI copilot combining a FastAPI backend and an Electron UI with full MCP integration. Provides system monitoring, application launching, process management, a task scheduler, usage alerts, and a full local REST API powered by Gemini function-calling.",
    tags: [
      "Python", "FastAPI", "Electron", "Node.js", "TypeScript", "MCP", "Gemini", "System Monitoring", "Process Automation"],
    github: "https://github.com/tahasinshadat/EdgePilot",
  },
  {
    title: "JARVIS – Agentic Desktop Copilot",
    description:
      "Voice-activated agentic desktop assistant using Gemini, ElevenLabs, and PyAutoGUI to see the screen, perform UI actions, automate workflows, and control the computer autonomously.",
    tags: ["Python", "Gemini API", "ElevenLabs", "PyAutoGUI", "Agentic AI", "Automation"],
    github: "https://github.com/tahasinshadat/agentic-pilot",
  },
  {
    title: "Investing Analysis ML Platform",
    description:
      "Investment research toolkit built for Brookfield, combining sentiment analysis, macro indicators, analyst ratings, Q10 parsing, and ML-driven valuation recommendations.",
    tags: ["Python", "Pandas", "NumPy", "scikit-learn", "NLP", "Finance"],
    github: "https://github.com/tahasinshadat/Investing-Analysis-Machine-Learning-Project",
  },
  {
    title: "Algorithm Visualizer (C++)",
    description:
      "Interactive visualizer for data structures and algorithms with a lightweight graphics engine. Built to explore quant-relevant structures like segment trees, graphs, and balanced trees.",
    tags: ["C++", "Algorithms", "Data Structures", "Graphics"],
    github: "https://github.com/tahasinshadat/Algorithm-Visualizer",
  },
  {
    title: "Chess++",
    description:
      "C++ multiplayer chess platform with clean board representation, move validation, piece hierarchies, and networking for live online play.",
    tags: ["C++", "Networking", "Game Engine", "OOP"],
    github: "https://github.com/tahasinshadat/multiplayer-chess",
  },
  {
    title: "Fitness101",
    description:
      "Social fitness web app with personalized workout plans, recipe generation, and real-time data updates using external APIs.",
    tags: ["JavaScript", "HTML", "CSS", "Python", "Web APIs"],
    github: "https://github.com/tahasinshadat/Fitness101",
  },
  {
    title: "AI Mario Kart Racer",
    description:
      "Deep reinforcement learning experiment that trains a neural network to autonomously race in Mario Kart, built in collaboration with Google mentors.",
    tags: ["Python", "TensorFlow", "PyTorch", "Reinforcement Learning"],
  },
  {
    title: "Instagram Clone",
    description:
      "Full-stack Instagram remake with media sharing, DMs, authentication, and feed generation for both web and mobile.",
    tags: ["Python", "Flask", "MongoDB", "React Native", "PostgreSQL"],
  },
  {
    title: "Retro-GameSite",
    description:
      "Collection of eight modular HTML5 retro games built for Google's 2023 Showcase, designed with canvas rendering and clean architecture.",
    tags: ["JavaScript", "HTML5 Canvas", "CSS"],
    github: "https://github.com/tahasinshadat/Retro-GameSite",
  },
  {
    title: "Sudoku Solver",
    description:
      "Interactive desktop Sudoku solver using a backtracking algorithm and Tkinter GUI.",
    tags: ["Python", "Tkinter", "Algorithms"],
    github: "https://github.com/tahasinshadat/Sudoku-Solver",
  },
  {
    title: "Realm-Raiders",
    description:
      "2D roguelike inspired by Soul Knight with procedural generation, weapon classes, and A*-driven enemy AI.",
    tags: ["Java", "OOP", "Game Dev"],
    github: "https://github.com/tahasinshadat/Realm-Raiders",
  }
];


const experiences = [
  {
    year: "2025",
    role: "Incoming Software Engineering Intern",
    company: "Brookfield Asset Management",
    location: "New York, NY",
    points: [
      "Building MCP servers that connect internal datasets to ChatGPT and Claude for investor workflows using LangGraph.",
      "Designing a full-stack tool that lets LLM-generated UIs trigger backend data workflows with Lovable.",
    ],
  },
  {
    year: "2025",
    role: "Software Engineering Intern",
    company: "Amazon Web Services (AWS)",
    location: "Seattle, WA",
    points: [
      "Optimized delete analytics processing from 8 hours to 1 minute through concurrency, batching, and Parquet compression.",
      "Shipped a parallel analysis tool that surfaces delete metrics and deep observability insights for service owners.",
      "Automated host remediation prioritization for failed delete requests, shrinking backlog and speeding recovery.",
    ],
  },
  {
    year: "2024",
    role: "Software Engineering Intern",
    company: "Brookfield Asset Management",
    location: "New York, NY",
    points: [
      "Developed a multi-prompt AI investment assistant that delivers buy, hold, or sell recommendations to analysts.",
      "Increased RAG LLM throughput by implementing pooled S3 uploads and concurrency strategies.",
      "Applied ARIMA, linear regression, and UCM models with regularization to sharpen stock forecasts.",
      "Modeled rent pricing with deep learning and VAR pipelines to uncover industry-specific trends.",
    ],
  },
  {
    year: "2024",
    role: ".NET/CRM Developer Intern",
    company: "NYC Department of Consumer and Worker Protection",
    location: "New York, NY",
    points: [
      "Tested, integrated, and updated REST APIs with Postman to preserve CRM performance and uptime.",
      "Documented .NET codebase enhancements and coordinated releases that improved agency workflows.",
    ],
  },
  {
    year: "2023",
    role: "Robotics & Software Engineering Intern",
    company: "Protomatica",
    location: "New York, NY",
    points: [
      "Co-designed and iterated on a robotic arm while maintaining the company website and firmware updates.",
      "Built a laser-based measurement tool plus mobile app that captures room dimensions instantly.",
      "Created a Raspberry Pi system that auto-levels projected images for perfect alignment every time.",
    ],
  },
  {
    year: "2022",
    role: "Student Engineer",
    company: "Google",
    location: "New York, NY",
    points: [
      "Completed ML projects in Python and Swift, strengthening deep learning, data structures, and algorithms expertise.",
      "Presented technical demos and business proposals to Google mentors and investors, refining modular and async design.",
    ],
  },
]

export default function Home() {
  const [copied, setCopied] = useState(false)
  const email = "tahasinshadat@gmail.com"
  const [scrollY, setScrollY] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null)
  const [visibleCardIndices, setVisibleCardIndices] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const projectsGridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!projectsGridRef.current) return

      const cards = projectsGridRef.current.querySelectorAll('[data-project-card]')
      let foundHover = false

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect()
        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom

        if (isInside) {
          setHoveredCardIndex(index)
          foundHover = true
        }
      })

      if (!foundHover) {
        setHoveredCardIndex(null)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target
            const cardIndex = element.getAttribute('data-card-index')

            if (cardIndex !== null) {
              setVisibleCardIndices(prev => new Set(prev).add(Number(cardIndex)))
            } else {
              entry.target.classList.add("in-view")
            }
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="w-full">
      <div className="cursor-trail" />

      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-visible">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[900px] h-[4px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent rotate-[25deg] origin-left animate-slide-diagonal-1" />
          <div className="absolute bottom-0 right-1/4 w-[900px] h-[4px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent rotate-[-25deg] origin-right animate-slide-diagonal-2" />
        </div>
        <div className="absolute right-4 sm:right-8 lg:right-16 -bottom-24 sm:-bottom-28 md:-bottom-32 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 opacity-60 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <WireframeIcosahedron />
          </Canvas>
        </div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="max-w-4xl w-full text-center space-y-8 relative z-10 px-4"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              <span className="text-muted-foreground font-normal">Hello, I'm </span>
              <span className="relative inline-block font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-[length:200%_100%] animate-gradient-flow bg-clip-text text-transparent animate-name-glow-subtle">
                Tahasin Shadat
                <span className="inline-block w-[3px] h-[0.85em] bg-white ml-1 align-middle animate-cursor-blink" />
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/95 max-w-3xl mx-auto text-balance leading-relaxed animate-fade-in-up animation-delay-200">
              Undergraduate at Northwestern University with experience in full-stack development, AI, and robotics.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 pt-12 animate-fade-in-up animation-delay-400">
            <p className="text-xs sm:text-sm text-muted-foreground/80 font-mono">Scroll down to see more</p>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-bounce-slow" />
          </div>
        </div>
      </section>

      <article id="about" className="min-h-screen pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <header className="space-y-4 mb-12 sm:mb-16 animate-on-scroll">
            <p className="text-primary font-mono text-glow-subtle text-sm sm:text-base">About</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Get to know me</h2>
          </header>
          <div className="flex flex-col items-center gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden glass-card animate-float border-glow-subtle group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20 opacity-70 group-hover:opacity-90 transition-opacity duration-700 blur-2xl" />
              <div className="absolute inset-0 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/50 transition-all duration-700 animate-pulse-ring" />
              <Image
                src="/linkedin-pfp.jpg"
                alt="Tahasin Shadat - Software Engineer at Northwestern University"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                priority
              />
            </div>
            <div className="max-w-3xl space-y-6 text-sm sm:text-base md:text-lg text-foreground/92 leading-relaxed text-center animate-on-scroll">
              <p>
                I'm a passionate software engineer and undergraduate student at Northwestern University, where I'm
                exploring the intersection of artificial intelligence, full-stack development, and robotics.
              </p>
              <p>
                My journey in technology has been driven by curiosity and a desire to build systems that make a real
                impact. From developing AI-powered applications to creating intuitive user interfaces, I thrive on
                solving complex problems with elegant solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                diving deep into research papers on machine learning and computer vision.
              </p>
            </div>
          </div>
          <Card className="p-6 sm:p-8 group bg-card/90 backdrop-blur-md border-border/80 hover:border-primary/60 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02] animate-on-scroll cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-xl sm:text-2xl font-bold mb-6 group-hover:text-primary transition-all duration-500 relative z-10">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 relative z-10">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/70 backdrop-blur-sm text-secondary-foreground rounded-lg font-mono text-xs sm:text-sm transition-all duration-500 hover:scale-105 hover:bg-primary/20 cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </article>

      <article id="projects" className="min-h-screen pt-20 sm:pt-32 pb-28 sm:pb-36 px-0 overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          <header className="space-y-4 mb-12 sm:mb-16 animate-on-scroll">
            <p className="text-primary font-mono text-glow-subtle text-sm sm:text-base">Projects</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Things I've built</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 max-w-2xl">
              A collection of projects showcasing my work in AI, robotics, and full-stack development.
            </p>
          </header>
          <div className="relative">
            <div className="hidden lg:block absolute inset-y-0 right-[-70%] w-[130%] z-0">
              <div className="relative h-full">
                <div
                  className="w-full h-full"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 8%, rgba(0,0,0,0.6) 15%, black 22%)',
                    maskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 8%, rgba(0,0,0,0.6) 15%, black 22%)'
                  }}
                >
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full scale-[1.08] translate-x-2"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-l from-background/5 via-background/25 to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:hidden relative mb-8 rounded-2xl overflow-hidden border border-border/60 bg-black h-[360px] sm:h-[420px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full scale-[1.2]"
              />
            </div>
            <div ref={projectsGridRef} className="grid sm:grid-cols-2 gap-4 sm:gap-6 relative z-20 w-full lg:pr-12 xl:pr-16 pointer-events-none">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  data-project-card
                  data-card-index={index}
                  className={`group bg-card/90 backdrop-blur-md border-border/80 transition-all duration-700 animate-on-scroll relative overflow-hidden pointer-events-none ${
                    visibleCardIndices.has(index) ? 'in-view' : ''
                  } ${
                    hoveredCardIndex === index
                      ? 'border-primary/60 shadow-2xl shadow-primary/10'
                      : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 transition-opacity duration-700 ${
                    hoveredCardIndex === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className={`text-lg sm:text-xl md:text-2xl transition-all duration-500 ${
                        hoveredCardIndex === index ? 'text-primary' : ''
                      }`}>
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2 sm:gap-3 flex-shrink-0">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-110 pointer-events-auto"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                          </Link>
                        )}
                        {project.demo && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-all duration-500 hover:scale-110 pointer-events-auto"
                            aria-label={`View ${project.title} demo`}
                          >
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground/85">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 sm:px-3 py-0.5 sm:py-1 backdrop-blur-sm text-secondary-foreground rounded text-xs font-mono transition-all duration-500 ${
                            hoveredCardIndex === index ? 'bg-primary/20' : 'bg-secondary/70'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </article>

      <article id="experience" className="min-h-screen pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <header className="space-y-4 mb-12 sm:mb-16 animate-on-scroll">
            <p className="text-primary font-mono text-glow-subtle text-sm sm:text-base">Experience</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Where I've worked</h2>
          </header>
          <div className="relative">
            <div
              className="hidden sm:block absolute inset-y-0 w-px bg-primary/40"
              style={{ left: "calc(5rem + 0.85rem)" }}
            />
            <div className="space-y-10 sm:space-y-14">
              {experiences.map((exp, index) => {
                const previous = experiences[index - 1]
                const showYear = !previous || previous.year !== exp.year
                return (
                  <div
                    key={`${exp.company}-${exp.role}`}
                    className="relative animate-on-scroll sm:flex sm:items-start sm:gap-x-6 lg:gap-x-10"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="hidden sm:flex items-start gap-3">
                      <div className="w-[4.75rem] flex flex-col items-end pr-1 select-none">
                        {showYear ? (
                          <span className="text-4xl md:text-5xl font-bold text-muted-foreground/20 leading-none">
                            {exp.year}
                          </span>
                        ) : (
                          <span className="h-12" />
                        )}
                      </div>
                      <div className="relative flex items-center pt-1">
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(34,211,238,0.55)] animate-pulse-dot" />
                      </div>
                    </div>
                    <div className="glass-card transition-transform duration-500 p-4 sm:p-6 rounded-xl border border-border/70 hover:border-glow-subtle sm:hover:translate-x-2 flex-1">
                      <div className="sm:hidden text-xs font-mono text-primary/80 uppercase tracking-[0.2em] mb-2">
                        {exp.year}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3">
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                            {exp.role}
                          </h3>
                          <p className="text-base sm:text-lg text-primary/90 font-semibold">{exp.company}</p>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground/75">{exp.location}</p>
                      </div>
                      <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                        {exp.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-3 hover:text-foreground transition-colors duration-500"
                          >
                            <span className="text-primary leading-none pt-1 sm:pt-1.5" aria-hidden="true">
                              {"\u25B8"}
                            </span>
                            <span className="leading-relaxed text-foreground/90">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </article>

      <section
        id="contact"
        className="min-h-screen -mt-8 sm:-mt-14 lg:-mt-20 pt-44 sm:pt-56 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-visible"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 sm:opacity-20 overflow-visible">
          <Canvas
            camera={{ position: [0, 0, 13], fov: 45 }}
            className="w-full h-[108vh] min-h-[620px] max-h-[1080px] translate-y-12 sm:translate-y-16 lg:translate-y-20"
          >
            <ambientLight intensity={0.75} />
            <MeshGlobe />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <header className="space-y-4 mb-12 sm:mb-16 text-center animate-on-scroll">
            <p className="text-primary font-mono text-glow-subtle text-sm sm:text-base">Contact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Get in touch</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80">
              I'm always open to new opportunities and collaborations.
            </p>
          </header>
          <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border mb-8 sm:mb-12 glass-card animate-on-scroll hover:border-glow-subtle transition-all duration-700 group hover:shadow-2xl hover:shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
            <form
              action="https://formsubmit.co/tahasinshadat@gmail.com"
              method="POST"
              className="space-y-6 relative z-10"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="bg-background/50 backdrop-blur-sm border-border focus:border-primary focus:shadow-sm focus:shadow-primary/5 transition-all duration-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background/50 backdrop-blur-sm border-border focus:border-primary focus:shadow-sm focus:shadow-primary/5 transition-all duration-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows={6}
                  className="bg-background/50 backdrop-blur-sm border-border focus:border-primary focus:shadow-sm focus:shadow-primary/5 resize-none transition-all duration-500"
                  required
                />
              </div>
              <input type="hidden" name="_subject" value="New message from portfolio website" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting me! I'll get back to you as soon as possible. Best, Tahasin Shadat"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://tahasin.dev" />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/30 transition-all duration-500"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 mt-4 sm:mt-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8 animate-on-scroll">
          <h3 className="text-xl sm:text-2xl font-bold">Connect with me</h3>
          <div className="flex justify-center gap-4 sm:gap-8 flex-wrap">
            <a
              href="https://github.com/tahasinshadat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-500 group"
              aria-label="Visit Tahasin Shadat's GitHub profile"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-all duration-500" />
              <span className="group-hover:text-glow-subtle transition-all duration-500 text-sm sm:text-base">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/tahasin-shadat/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-500 group"
              aria-label="Visit Tahasin Shadat's LinkedIn profile"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-all duration-500" />
              <span className="group-hover:text-glow-subtle transition-all duration-500 text-sm sm:text-base">
                LinkedIn
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-500 group"
              aria-label="Scroll to contact form"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-all duration-500" />
              <span className="group-hover:text-glow-subtle transition-all duration-500 text-sm sm:text-base hidden sm:inline">
                {email}
              </span>
              <span className="group-hover:text-glow-subtle transition-all duration-500 text-sm sm:text-base sm:hidden">
                Email
              </span>
              {copied ? (
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-scale-in" />
              ) : (
                <Copy
                  className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-500"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    copyEmail()
                  }}
                />
              )}
            </a>
          </div>
        </div>
      </section>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 p-2.5 sm:p-3 glass-card rounded-full border-glow-subtle hover:scale-110 transition-all duration-500 ${
          showBackToTop ? "opacity-100 rotate-0" : "opacity-0 rotate-180 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
      </button>

      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-muted-foreground/70">© {new Date().getFullYear()} Tahasin Shadat</p>
        </div>
      </footer>
    </div>
  )
}
