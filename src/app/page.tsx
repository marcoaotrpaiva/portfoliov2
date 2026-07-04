import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Server,
  Cloud,
  Activity,
  Database,
  Mail,
  Send,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      {/* HERO */}
      <section
        id="about"
        className="w-full max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32"
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col items-start text-left">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-brand-700 bg-brand-50 rounded-full border border-brand-100">
              Available for Cloud / DevOps Opportunities
            </span>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Marco Paiva{" "}
              <span className="block text-brand-600">
                Cloud & Platform Engineer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
              I build and operate cloud-native systems using Kubernetes, Azure,
              and modern observability stacks, focusing on reliability,
              scalability, and automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="#projects"
                className="inline-flex justify-center items-center px-8 py-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30"
              >
                View Systems <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/5] w-full max-w-[500px] mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Marco Paiva - Cloud Engineer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* TECH FOCUS BAR */}
      <section className="w-full bg-slate-50 border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: Cloud,
              text: "Cloud Systems",
              sub: "Azure & distributed infra",
            },
            {
              icon: Server,
              text: "Kubernetes",
              sub: "Container orchestration",
            },
            {
              icon: Activity,
              text: "Observability",
              sub: "OpenTelemetry & Grafana",
            },
            { icon: Database, text: "APIs", sub: "REST & integrations" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                <item.icon className="w-6 h-6 text-brand-600" />
              </div>
              <p className="font-bold text-slate-900">{item.text}</p>
              <p className="text-xs text-slate-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEMS / EXPERIENCE */}
      <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Systems & Engineering Work
          </h2>
          <p className="text-xl text-slate-600">
            Real-world infrastructure, cloud platforms, and automation systems
            I’ve worked on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Enterprise Media Platform (Vidispine)",
              desc: "Support and operate Kubernetes-based media systems with distributed architecture.",
              points: [
                "Kubernetes workload troubleshooting",
                "OpenTelemetry instrumentation",
                "Grafana observability dashboards",
                "REST API integration debugging",
              ],
            },
            {
              title: "AI Engineering Automation Platform (Deloitte)",
              desc: "Internal AI system to accelerate .NET project scaffolding and API workflows.",
              points: [
                "Python automation (HAR → Swagger generation)",
                ".NET MVC internal tooling",
                "Prompt engineering workflows",
                "Azure-based environments",
              ],
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-600 mb-6">{s.desc}</p>

              <ul className="space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core Engineering Focus
          </h2>

          <p className="text-slate-400 text-xl mb-16">
            Building reliable, observable, and scalable cloud systems.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Cloud Infrastructure",
              "Platform Engineering",
              "Observability Systems",
              "API Integration & Debugging",
            ].map((s) => (
              <div
                key={s}
                className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
              >
                <CheckCircle2 className="w-8 h-8 text-brand-400 mx-auto mb-4" />
                <p className="font-bold">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="w-full bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - Message */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Let’s work on scalable systems
            </h2>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Open to Cloud Engineering, DevOps, Platform Engineering, and SRE
              opportunities. Focused on Kubernetes, Azure, observability, and
              backend systems.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">
                  Email
                </p>
                <a
                  href="mailto:your@email.com"
                  className="text-lg font-semibold text-slate-900 hover:text-brand-600 transition"
                >
                  marcoaotrpaiva@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-400 uppercase">
                  Location
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  Portugal / Open to Remote (EU)
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - Simple Contact Card */}
          <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                  <span className="text-brand-600 font-bold">@</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase">
                    Direct Contact
                  </p>
                  <p className="text-slate-900 font-semibold">
                    Fast response within 24–48h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                  <span className="text-brand-600 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase">
                    Availability
                  </p>
                  <p className="text-slate-900 font-semibold">
                    Open to new opportunities
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  Preferred contact: email or LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-slate-900 text-slate-400 py-10 text-center">
        <p className="text-white font-bold">Marco Paiva</p>
        <p className="text-sm">Cloud & Platform Engineer</p>
      </footer>
    </main>
  );
}
