"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Briefcase,
  GraduationCap,
  Globe,
  Link2,
  GitBranch,
  Mail,
  ChevronDown,
  Code2,
  Users,
  TrendingUp,
  Layers,
} from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 24 }}
      animate={{ y: isInView ? 0 : 24 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#d4a017]/10 border border-[#d4a017]/30">
        <Icon size={18} className="text-[#d4a017]" />
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-[#e6edf3]">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-[#d4a017]/30 to-transparent ml-2" />
    </div>
  );
}

const experience = [
  {
    title: "Head of Software Engineering",
    company: "Sainsbury's Group / Argos",
    period: "2024 – Present",
    bullets: [
      "End-to-end ownership of large-scale customer-facing digital and physical retail platforms",
      "Led modernisation of core grocery e-commerce; stabilised high-traffic customer journeys",
      "Expanded to Argos in-store digital channels: self-serve kiosks, PoS innovations, returns & collections transformation",
      "Directed the £720m Argos credit portfolio sale, platform consolidation, and legacy decommissioning",
      "Led 50–80+ engineers and partners through high-risk transformation programmes",
      "Routinely operates at Director / Division level, influencing commercial and technology strategy",
    ],
  },
  {
    title: "Software Engineering Manager",
    company: "Sainsbury's",
    period: "2020 – 2024",
    bullets: [
      "Managed multiple engineering teams across search, advertising, and personalisation platforms",
      "Delivered award-winning digital advertising platforms serving millions of customers",
      "Led technical strategy, hiring, mentoring, and engineering budget management",
    ],
  },
  {
    title: "Software Engineering Manager",
    company: "Fonix",
    period: "2018 – 2020",
    bullets: [
      "Full technical and people leadership of a high-throughput mobile messaging platform",
      "Platform ownership, team building, workflow & process operations, and technology strategy",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Palitinate Group",
    period: "2016 – 2018",
    bullets: [
      "Delivered niche e-commerce solutions from inception to production",
      "Mentored junior engineers; drove agile delivery across multiple greenfield projects",
    ],
  },
];

const skills = [
  { label: "AWS & Cloud", icon: Layers },
  { label: "Software Architecture", icon: Code2 },
  { label: "Team & People Management", icon: Users },
  { label: "Technical Strategy", icon: TrendingUp },
  { label: "Budgeting & Forecasting", icon: TrendingUp },
  { label: "API Design", icon: Code2 },
  { label: "Distributed Systems", icon: Layers },
  { label: "Web Technologies", icon: Globe },
  { label: "Communication & Stakeholders", icon: Users },
  { label: "Mentoring & Coaching", icon: Users },
  { label: "Contract Negotiations", icon: Briefcase },
  { label: "Digital Transformation", icon: TrendingUp },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#e6edf3] ">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#d4a017]/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#d4a017]/3 blur-[100px]" />
        </div>

        <div className="hero-animate relative z-10 flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4a017]/40 bg-[#d4a017]/10 text-[#d4a017] text-sm font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a017] animate-pulse" />
            Open to senior opportunities
          </span>

          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter leading-none">
            <span className="bg-gradient-to-br from-[#e6edf3] via-[#c9d1d9] to-[#8b949e] bg-clip-text text-transparent">
              David
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-light text-[#d4a017] tracking-widest uppercase">
            Head of Software Engineering
          </p>

          <p className="max-w-lg text-[#8b949e] text-lg leading-relaxed">
            Turning ambiguous complexity into reliable, scalable software — and
            building the teams that keep it that way.
          </p>

          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-[#d4a017] text-[#0d1117] font-semibold text-sm hover:bg-[#f0c040] transition-colors duration-200"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="px-6 py-3 rounded-lg border border-[#d4a017]/40 text-[#d4a017] font-semibold text-sm hover:border-[#d4a017] hover:bg-[#d4a017]/10 transition-colors duration-200"
            >
              View experience
            </a>
          </div>
        </div>

        <div className="hero-chevron absolute bottom-10 left-1/2 -translate-x-1/2 text-[#8b949e]">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-28">
        {/* Summary */}
        <section id="summary">
          <AnimatedSection>
            <SectionHeading icon={Briefcase} title="Professional Summary" />
            <div className="bg-[#161b22] border border-[#21262d] rounded-2xl p-8">
              <p className="text-[#c9d1d9] leading-8 text-lg">
                Pragmatic, results-oriented senior technology leader with{" "}
                <span className="text-[#d4a017] font-medium">5+ years</span>{" "}
                leading software engineering management, architecture, and
                large-scale high-risk tech delivery in retail. Currently{" "}
                <span className="text-[#d4a017] font-medium">
                  Head of Software Engineering at Sainsbury&apos;s Group / Argos
                </span>
                , directing teams of{" "}
                <span className="text-[#d4a017] font-medium">50–80+ engineers</span>{" "}
                through complex digital transformation programmes that touch
                millions of customers every day.
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Experience */}
        <section id="experience">
          <AnimatedSection>
            <SectionHeading icon={Briefcase} title="Experience" />
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a017]/60 via-[#d4a017]/20 to-transparent" />
            <div className="space-y-10">
              {experience.map((job, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="relative pl-14">
                    <span
                      className={cn(
                        "absolute left-3.5 top-2 w-3 h-3 rounded-full border-2 -translate-x-1/2",
                        i === 0
                          ? "bg-[#d4a017] border-[#d4a017] shadow-[0_0_12px_#d4a017]"
                          : "bg-[#0d1117] border-[#d4a017]/50"
                      )}
                    />
                    <div className="bg-[#161b22] border border-[#21262d] rounded-2xl p-7 hover:border-[#d4a017]/30 transition-colors duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-[#e6edf3]">
                            {job.title}
                          </h3>
                          <p className="text-[#d4a017] font-medium text-sm mt-0.5">
                            {job.company}
                          </p>
                        </div>
                        <span className="text-xs font-mono text-[#8b949e] bg-[#0d1117] border border-[#21262d] px-3 py-1 rounded-full">
                          {job.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {job.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-[#8b949e] text-sm leading-relaxed"
                          >
                            <span className="text-[#d4a017] mt-1.5 shrink-0">›</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <AnimatedSection>
            <SectionHeading icon={Code2} title="Skills & Expertise" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.97 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 bg-[#161b22] border border-[#21262d] rounded-xl px-4 py-3 hover:border-[#d4a017]/40 transition-colors duration-200 cursor-default"
                >
                  <skill.icon size={15} className="text-[#d4a017] shrink-0" />
                  <span className="text-[#c9d1d9] text-sm font-medium">
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Education & Languages */}
        <section id="education">
          <AnimatedSection>
            <SectionHeading icon={GraduationCap} title="Education & Languages" />
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#161b22] border border-[#21262d] rounded-2xl p-7 hover:border-[#d4a017]/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={18} className="text-[#d4a017]" />
                  <h3 className="text-[#e6edf3] font-semibold">Education</h3>
                </div>
                <p className="text-[#c9d1d9] font-medium">
                  BSc (Hons) Software Engineering
                </p>
                <p className="text-[#d4a017] text-sm mt-1">First Class Honours</p>
                <p className="text-[#8b949e] text-sm mt-1">Kingston University London</p>
              </div>

              <div className="bg-[#161b22] border border-[#21262d] rounded-2xl p-7 hover:border-[#d4a017]/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={18} className="text-[#d4a017]" />
                  <h3 className="text-[#e6edf3] font-semibold">Languages</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { lang: "English", level: "Native" },
                    { lang: "Portuguese", level: "Fluent" },
                  ].map(({ lang, level }) => (
                    <div key={lang} className="flex items-center justify-between">
                      <span className="text-[#c9d1d9] text-sm">{lang}</span>
                      <span className="text-xs font-mono text-[#8b949e] bg-[#0d1117] border border-[#21262d] px-3 py-1 rounded-full">
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Contact */}
        <section id="contact">
          <AnimatedSection>
            <SectionHeading icon={Mail} title="Get in Touch" />
            <div className="bg-[#161b22] border border-[#21262d] rounded-2xl p-10 text-center">
              <p className="text-[#8b949e] text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                I&apos;m open to senior technology leadership opportunities.
                Let&apos;s connect and explore how I can help your organisation
                deliver at scale.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://linkedin.com/in/david"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#d4a017] text-[#0d1117] font-semibold text-sm hover:bg-[#f0c040] transition-colors duration-200"
                >
                  <Link2 size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/david"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-[#d4a017]/40 text-[#d4a017] font-semibold text-sm hover:border-[#d4a017] hover:bg-[#d4a017]/10 transition-colors duration-200"
                >
                  <GitBranch size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-[#8b949e] text-sm">
        <p>
          &copy; {new Date().getFullYear()} David. Built with Next.js &amp; Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
