import Image from "next/image";
import { ArrowRight, CheckCircle2, Code2, Rocket, Smartphone, Mail, Send } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      
      {/* A. HERO - "Trust Gate" */}
      <section id="about" className="w-full max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-start text-left fade-in [animation-delay:200ms]">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-brand-700 bg-brand-50 rounded-full border border-brand-100">
              Available for New Projects
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Marco Paiva <span className="block text-brand-600">Full Stack Developer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
              I build fast, modern websites that help local businesses attract more customers and dominate their market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="#contact" className="inline-flex justify-center items-center px-8 py-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 hover:shadow-xl hover-lift">
                Start a Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#projects" className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all hover-lift">
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Large Dominant Image */}
          <div className="relative aspect-square md:aspect-[4/5] w-full max-w-[500px] mx-auto md:max-w-none rounded-3xl overflow-hidden shadow-2xl fade-in [animation-delay:400ms]">
            <Image
              src="/profile.jpg"
              alt="Marco Paiva - Full Stack Developer"
              fill
              className="object-cover"
              priority
            />
            {/* Decorative element */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
          </div>
        </div>
      </section>

      {/* B. CREDIBILITY BAR */}
      <section className="w-full bg-slate-50 border-y border-slate-100 py-12 reveal">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Rocket, text: "Fast Delivery", sub: "Weeks, not months" },
            { icon: Code2, text: "Clean Code", sub: "Scalable & maintainable" },
            { icon: Smartphone, text: "Mobile-First", sub: "Perfect on all devices" },
            { icon: CheckCircle2, text: "SEO Focused", sub: "Get found online" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-3">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                <item.icon className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-base">{item.text}</p>
                <p className="text-xs text-slate-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* C. PROJECTS - "Proof of Work" */}
      <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Proven Results</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              I don&apos;t just build websites; I build business tools. Here are a few examples of how I&apos;ve helped local businesses grow.
            </p>
          </div>
          <Link href="#contact" className="text-brand-600 font-bold flex items-center hover:gap-2 transition-all">
            Want results like these? <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              name: "Bella Napoli Pizza",
              problem: "Outdated menu PDF, zero mobile traffic.",
              solution: "Custom responsive site with digital menu and easy call-to-order.",
              stack: ["Next.js", "Tailwind CSS"],
              outcome: "+40% increase in mobile orders within first month."
            },
            {
              name: "Elite Auto Detailing",
              problem: "No online presence, relying purely on word of mouth.",
              solution: "High-converting landing page showcasing portfolio & reviews.",
              stack: ["React", "CSS"],
              outcome: "Consistent 15+ leads generated weekly."
            },
            {
              name: "Green Thumb Landscaping",
              problem: "Customers couldn't find services easily.",
              solution: "Clear service pages with before/after gallery and quote form.",
              stack: ["Next.js", "Tailwind CSS"],
              outcome: "Booked out for the entire summer season."
            },
            {
              name: "Downtown Dental Clinic",
              problem: "Slow legacy website driving potential patients away.",
              solution: "Modern, blazing-fast site with direct booking integration.",
              stack: ["React", "TypeScript", "Tailwind"],
              outcome: "Reduced bounce rate by 60%."
            }
          ].map((project, i) => (
            <div key={i} className="group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover-lift">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">{project.name}</h3>
              <div className="space-y-6 text-slate-600">
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">The Problem</p>
                  <p className="text-slate-700">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">The Solution</p>
                  <p className="text-slate-700">{project.solution}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-full border border-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">The Outcome</p>
                      <p className="text-brand-700 font-bold text-lg">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* D. SERVICES / SKILLS */}
      <section className="w-full bg-slate-900 text-white py-24 md:py-32 reveal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Expertise Built for Conversion</h2>
            <p className="text-slate-400 text-xl leading-relaxed">
              Every line of code I write is focused on speed, accessibility, and most importantly, your bottom line.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Frontend Development", desc: "Fast, responsive, and pixel-perfect interfaces." },
              { name: "UI Implementation", desc: "Modern designs brought to life with precision." },
              { name: "Landing Pages", desc: "Engineered specifically to convert visitors." },
              { name: "Performance Opt.", desc: "Blazing fast speeds for better SEO." }
            ].map((service, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50 text-center hover:bg-slate-800 transition-all hover-lift">
                <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-brand-500/20">
                  <CheckCircle2 className="w-8 h-8 text-brand-400" />
                </div>
                <h3 className="font-bold text-xl mb-3">{service.name}</h3>
                <p className="text-slate-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. CONTACT */}
      <section id="contact" className="w-full bg-white py-24 md:py-32 reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Ready to transform your online presence?
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Whether you have a specific project in mind or just want to explore how a modern website could help your business, I&apos;d love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase">Direct Email</p>
                    <p className="text-lg font-semibold text-slate-900">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase">Availability</p>
                    <p className="text-lg font-semibold text-slate-900">Next slot: May 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700">Name</label>
                    <input type="text" id="name" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">Email</label>
                    <input type="email" id="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Project Details</label>
                  <textarea id="message" rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white" placeholder="What can I help you with?"></textarea>
                </div>
                
                <button type="button" className="w-full inline-flex justify-center items-center px-8 py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 hover-lift">
                  Send Message <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-white font-bold text-lg mb-4">Marco Paiva</p>
          <p className="text-sm text-slate-500 mb-8 max-w-sm mx-auto">Helping local businesses thrive with conversion-focused web development.</p>
          <div className="h-px w-full bg-slate-800 mb-8" />
          <p className="text-xs">© {new Date().getFullYear()} Marco Paiva. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
