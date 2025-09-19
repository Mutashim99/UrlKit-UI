import React from "react";
import { Github, Linkedin, Zap, Shield, Globe, Sparkles, Clock, BarChart3 } from "lucide-react";
import NavBar from "@/components/home.components/NavBar";

const About = () => {
  return (
    <div className="bg-[#0B101B] text-[#C9CED6] min-h-screen flex flex-col items-center">
      <NavBar />

      {/* Hero */}
      <div className="px-8 py-16 flex flex-col items-center">
        <h1
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text mb-6 text-center"
          style={{ backgroundImage: "linear-gradient(to right, #EB568E, #144EE3)" }}
        >
          About UrlKit
        </h1>
        <p className="max-w-2xl text-center text-lg leading-relaxed mb-12">
          <span className="font-semibold text-white">UrlKit</span> is a{" "}
          <span className="text-white">fast, free, and privacy-first URL shortener </span> 
          that makes long links short, clean, and shareable. Built with{" "}
          <span className="font-semibold text-white">no login required</span>, UrlKit 
          ensures a <span className="text-white">hassle-free experience </span> while giving 
          you the power to create <span className="text-white">custom aliases</span> and 
          brand your links.
        </p>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full mb-20">
          {[
            {
              icon: <Zap className="size-6 text-[#EB568E]" />,
              title: "Blazing Fast",
              desc: "Shorten and share links in seconds. Lightweight and optimized for speed."
            },
            {
              icon: <Sparkles className="size-6 text-[#144EE3]" />,
              title: "Custom Aliases",
              desc: "Create unique, memorable, and brand-friendly short links that stand out."
            },
            {
              icon: <Shield className="size-6 text-[#C9CED6]" />,
              title: "Privacy First",
              desc: "No login or sign-up required. Your data is yours — no tracking, no nonsense."
            },
            {
              icon: <Globe className="size-6 text-[#EB568E]" />,
              title: "Accessible Anywhere",
              desc: "Works seamlessly across devices — mobile, tablet, or desktop."
            },
            {
              icon: <Clock className="size-6 text-[#144EE3]" />,
              title: "Always Free",
              desc: "Completely free to use with no hidden costs, subscriptions, or restrictions."
            },
            {
              icon: <BarChart3 className="size-6 text-[#C9CED6]" />,
              title: "Link Analytics",
              desc: "Track clicks, devices, and geolocation stats for smarter link sharing."
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-[#181E29] rounded-2xl p-6 border border-[#353C4A] hover:border-[#144EE3] transition flex flex-col items-start"
            >
              {feature.icon}
              <h2 className="text-xl font-bold mt-3 mb-2 text-white">{feature.title}</h2>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission / Vision */}
        <div className="max-w-4xl text-center mb-20 space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            UrlKit was built with the vision to make{" "}
            <span className="text-white">link sharing simple, reliable, and accessible</span>{" "}
            for everyone. Whether you’re a student, developer, marketer, or business owner, 
            UrlKit empowers you to{" "}
            <span className="text-white">share smarter, faster, and without barriers</span>.
          </p>
        </div>

        {/* Developer Section */}
        <div className="max-w-3xl text-center mb-20 space-y-5">
          <h2 className="text-2xl font-bold text-white">Meet the Developer</h2>
          <p className="leading-relaxed">
            Hi, I’m <span className="font-semibold text-white">Mutashim Mohsin</span>, 
            a passionate <span className="text-white">solo developer</span> who crafted UrlKit 
            from the ground up. This project reflects my dedication to building{" "}
            <span className="text-white">practical, minimalistic, and powerful tools</span> 
            for the modern web.
          </p>
          <p>
            From designing the system to deploying it, UrlKit is a{" "}
            <span className="font-semibold text-white">one-person project</span> — proving 
            that independent developers can build tools that compete with big platforms.
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-6">
          <a
            href="https://github.com/mutashim99"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#181E29] border border-[#353C4A] hover:border-[#EB568E] transition"
          >
            <Github className="size-5" /> <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/mutashim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#181E29] border border-[#353C4A] hover:border-[#144EE3] transition"
          >
            <Linkedin className="size-5" /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
