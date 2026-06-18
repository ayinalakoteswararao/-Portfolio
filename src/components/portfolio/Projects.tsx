import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, ArrowUpRight, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  desc: string;
  stack: string[];
  github: string;
  demo?: string;
  gradient?: string;
  image?: string;
  category: "All" | "Web" | "AI/ML" | "Tools";
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "WORK PULSE",
    desc: "👔 Work Pulse is a modern employee management and productivity tracking platform. 📈 It features real-time task assignment, performance analytics 📊, and seamless team collaboration tools 🤝. 🌐 Built with React and Node.js, it offers an intuitive interface 🖥️ and delivers ✅ reliable insights to optimize workplace efficiency 🚀.",
    stack: ["React", "Node.js", "Tailwind CSS", "Productivity"],
    github: "https://github.com/ayinalakoteswararao",
    image: "/projects/work_pulse.png",
    category: "Web",
    featured: true,
  },
  {
    title: "LOAN PREDICTION",
    desc: "💰 Loan Prediction Application is a machine learning-powered web application that predicts loan approval outcomes based on applicant information such as 💵 income, 📈 credit history, 👨‍💼 employment status, and 🏦 loan amount. 🤖 Developed using Python, Machine Learning, and 🌐 web technologies, it delivers 🎯 accurate predictions and supports 📊 data-driven decision-making for financial institutions, helping reduce risk ⚠️ and improve operational efficiency 🚀.",
    stack: ["Machine Learning", "Python", "Data Analysis", "Predictive Modeling"],
    github: "https://github.com/ayinalakoteswararao",
    image: "/projects/loan_prediction_mockup.png",
    category: "AI/ML",
  },
  {
    title: "PAYSYNC",
    desc: "💸 PaySync is a seamless payroll and financial synchronization platform for modern businesses. 🏦 It automates salary disbursements 💵, tax calculations 🧾, and expense tracking 📊. 🌐 Built with Next.js and PostgreSQL, it provides a secure and scalable solution 🔒 to streamline accounting operations and ensure financial compliance 📉.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "FinTech"],
    github: "https://github.com/ayinalakoteswararao",
    image: "/projects/pay_sync.png",
    category: "Tools",
  },
  {
    title: "CAMPUSBITES WEB APPLICATION FOR FOOD ORDERING",
    desc: "🍴 Campus Bites (Cafeteria Management System) A full-stack web application to simplify 🍔 cafeteria operations, allowing students 👩‍🎓 to order food and canteen owners 👨‍🍳 to manage menus in real time. Features include secure payments 💳, real-time updates ⏱️, and a user-friendly interface 🖥️, showcasing expertise in full-stack development.",
    stack: ["Nodejs", "Expressjs", "MongoDB", "REST API"],
    github: "https://github.com/ayinalakoteswararao/Campus-Bites",
    image: "/projects/campus_bites.png",
    category: "Web",
    featured: true,
  },
  {
    title: "WATER POTABILITY PREDICTION",
    desc: "💧 Water Potability Prediction is an 🤖 AI-powered machine learning application 🧠 that predicts whether water is safe for drinking 🚰. 📊 It analyzes key water quality parameters such as pH 🌡️, sulfate 🧪, turbidity 🌫️, and other essential attributes for accurate results. 🌐 Built with Flask 🖥️, it offers a user-friendly interface 🧑‍💻 and delivers ✅ reliable insights 🔍 to support informed water safety decisions 💙.",
    stack: ["Machine Learning", "Flask", "Python", "ARTIFICIAL INTELLIGENCE"],
    github: "https://github.com/ayinalakoteswararao/Water-Potability-Prediction",
    image: "/projects/water_potability.png",
    category: "AI/ML",
  },
  {
    title: "MEDITRAINAI: HEALTHCARE CHATBOT",
    desc: "An AI-powered medical chatbot 💬 designed to assist users with accurate 🎯, empathetic ❤️, and clear 💡 responses to health-related queries. While not a replacement 🚫 🏥 for professional healthcare, MediTrainAI simplifies symptom understanding 🔍 and guides users toward the right course of action 🎯. ⚠️ Includes smart triage guidance 🚨 to help users decide when to seek professional medical attention 🏥 for timely and safer care.",
    stack: ["Machine Learning", "Flask", "MYSQL", "Hugging Face"],
    github: "https://github.com/ayinalakoteswararao/MediTrainAI",
    image: "/projects/meditrain_ai.png",
    category: "AI/ML",
  },
  {
    title: "Weather Now",
    desc: "🌤️ Weather Now is a modern weather dashboard 🌐 built with Flask 🧪 and vanilla JavaScript ⚡. 📅 📍 it displays real-time conditions, hourly & daily forecasts using Chart.js 📊, with 📍 geolocation support. 🎨 Features dark/light themes, colorful forecast cards 🟦 🟨, powered by the Open-Meteo API ⚙️ (no API key required).",
    stack: ["Python", "Flask", "Machine Learning", "Geolocation API", "Chart.js", "REST API Integration"],
    github: "https://github.com/ayinalakoteswararao/-Weather-Now",
    image: "/projects/weather_now.png",
    category: "Web",
  },
  {
    title: "Invoice Generator Pro",
    desc: "💼 Invoice Generator Pro – GST Billing Made Easy A powerful invoice management system for 🇮🇳 Indian businesses with both 🖥️ Desktop (Tkinter) and 🌐 Web (Flask) versions. ✔️ Generate professional GST-compliant invoices 💰 Auto-calculates CGST/SGST 📄 Download branded PDF invoices 📷 Embedded QR codes for easy access 🛠️ Built with Python, Flask",
    stack: ["JAVASCRIPT", "HTML", "CSS", "Tkinter", "MYSQL", "PDF Generation"],
    github: "https://github.com/ayinalakoteswararao/Invoice-Generator",
    demo: "https://koteswararao02.pythonanywhere.com/",
    image: "/projects/invoice_generator.png",
    category: "Tools",
  },
  {
    title: "Food Finder",
    desc: "🍽️ Food Finder is a Flask-based restaurant discovery app that lets you ⭐ filter by rating, 🏙️ city, and 💰 cost, 🗺️ view results on a map, 📄 export PDF reports, and 🔌 access data via a JSON API using 📊 CSV or 🗄️ MySQL as the backend. 🖥️ It provides a clean, user-friendly interface 🧑‍💻 with fast search ⚡ and insightful visual results 📍 to help users choose the best dining options 🍕 🥗.",
    stack: ["Python", "Flask", "Machine Learning", "PCA", "Data Visualization", "Recommendation Engine"],
    github: "https://github.com/ayinalakoteswararao/Food-Finder",
    image: "/projects/food_finder.png",
    category: "Web",
  },
];

const categories = ["All", "Web", "AI/ML", "Tools"] as const;

export const Projects = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="container py-24">
      <SectionHeading kicker="Projects" title="Selected work" subtitle="A few things I've designed and built recently." />

      <div className="flex flex-wrap justify-center gap-2 mt-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`relative px-4 py-2 text-sm rounded-full transition-colors ${filter === c ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {filter === c && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 bg-gradient-primary rounded-full shadow-glow"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="flex flex-col gap-8 mt-10 max-w-5xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              style={{ top: '100px' }}
              className="group sticky bg-card rounded-[32px] border border-border overflow-hidden hover:shadow-card transition-shadow duration-300 flex flex-col md:flex-row p-6 md:p-8 mb-32 z-10 h-[calc(100vh-120px)] min-h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {p.featured && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 md:left-auto md:right-8 z-20 flex items-center gap-1.5 bg-background/90 backdrop-blur-md border border-primary/20 rounded-full px-3 py-1 text-xs text-primary font-bold shadow-lg">
                  <Star size={14} className="fill-primary" /> Featured
                </div>
              )}

              {/* Left Side (Matter) */}
              <div className="w-full md:w-1/2 flex flex-col md:pr-8 lg:pr-12 relative z-10 h-full">
                {/* Top Header Row */}
                <div className="flex justify-between items-center text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-4 mb-6">
                  <span>{p.category}</span>
                  <span className="text-right">{p.stack.slice(0, 2).join(" & ")}</span>
                </div>

                {/* Title */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter text-foreground group-hover:text-primary transition-colors leading-tight mb-6">
                  {p.title}
                </h3>

                {/* Description */}
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar mb-6">
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8 shrink-0">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-muted text-foreground border border-border uppercase tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links / Buttons */}
                <div className="flex gap-4 shrink-0 mt-auto">
                  {p.github && (
                    <Button asChild variant="outline" size="lg" className="rounded-full font-bold border-border hover:bg-primary/10">
                      <a href={p.github} target="_blank" rel="noreferrer"><Github className="size-5 mr-2" /> Code</a>
                    </Button>
                  )}
                  {p.demo && (
                    <Button asChild size="lg" className="rounded-full font-bold bg-primary text-primary-foreground hover:opacity-90 shadow-glow">
                      <a href={p.demo} target="_blank" rel="noreferrer"><ExternalLink className="size-5 mr-2" /> Live Demo</a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Side (Image) */}
              <div className={`w-full md:w-1/2 h-48 md:h-full rounded-[24px] ${p.image ? 'bg-muted' : 'bg-primary/10'} relative overflow-hidden shrink-0 mt-6 md:mt-0`}>
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold opacity-20">
                    {p.title}
                  </div>
                )}
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Hover icon overlay */}
                <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-md rounded-full p-4 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight className="w-8 h-8 text-foreground" />
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
