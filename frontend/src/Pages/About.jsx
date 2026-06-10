import React, { useEffect, memo, useMemo } from "react"
import { 
  FileText, 
  Code, 
  Award, 
  Globe, 
  ArrowUpRight, 
  Sparkles, 
  GraduationCap, 
  Trophy, 
  MapPin, 
  Calendar,
  Code2
} from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PROJECTS, CERTIFICATES, LEETCODE, BIO, EDUCATION } from "../constants/portfolioData"

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2 
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" 
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p 
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Transforming complex logic into seamless digital experiences
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div 
      className="relative group" 
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Gradient backgrounds for premium desktop hover glow */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
          
          <img
            src="/photo_utkarsh.png"
            alt="Utkarsh Jain Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span 
          className="text-4xl font-bold text-white"
          data-aos="fade-up-left"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
        >
          {value}
        </span>
      </div>

      <div>
        <p 
          className="text-sm uppercase tracking-wider text-gray-300 mb-2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          {label}
        </p>
        <div className="flex items-center justify-between">
          <p 
            className="text-xs text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            {description}
          </p>
          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false, 
      });
    };

    initAOS();
    
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const statsData = useMemo(() => [
    {
      icon: Code,
      color: "from-[#6366f1] to-[#a855f7]",
      value: PROJECTS.length,
      label: "Total Projects",
      description: "Distributed Systems & Web Apps",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-[#a855f7] to-[#6366f1]",
      value: CERTIFICATES.length,
      label: "Certificates",
      description: "AWS & CCNA verified credentials",
      animation: "fade-up",
    },
    {
      icon: Trophy,
      color: "from-[#6366f1] to-[#a855f7]",
      value: LEETCODE.rating,
      label: "LeetCode Rating",
      description: `${LEETCODE.solved} problems solved`,
      animation: "fade-left",
    },
  ], []);

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0 bg-[#030014]" 
      id="About"
    >
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        {/* Intro Grid */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
              <span 
                className="block mt-2 text-gray-200"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                {BIO.name}
              </span>
            </h2>
            
            <p 
              className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0 font-light"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              {BIO.aboutText}
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a href={BIO.cvLink} className="w-full lg:w-auto">
                <button 
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV / Resume
                </button>
              </a>
              <a href="#Portofolio" className="w-full lg:w-auto">
                <button 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200"
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

        {/* Stats Grid */}
        <a href="#Portofolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>

        {/* Secondary Info Layout: Education and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
          {/* Left Column: Education */}
          <div 
            className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-indigo-400" />
              Education History
            </h3>
            
            <div className="relative border-l-2 border-indigo-500/30 pl-6 ml-3 space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative group/edu">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover/edu:bg-indigo-400 transition-colors duration-300" />
                  
                  <div className="space-y-1">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {edu.year}
                    </span>
                    <h4 className="text-lg font-semibold text-white group-hover/edu:text-indigo-300 transition-colors duration-200 mt-2">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-gray-300 font-medium">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                        {edu.location}
                      </span>
                      <span className="font-semibold text-indigo-400">{edu.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Competitive Programming */}
          <div 
            className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-purple-400" />
              Competitive Programming
            </h3>

            {/* Quick Rating Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                <span className="text-xs text-gray-400 uppercase tracking-wider">LeetCode Contests</span>
                <div className="text-2xl font-bold text-purple-300 mt-1">{LEETCODE.contests}</div>
              </div>
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-center">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Peak Rating</span>
                <div className="text-2xl font-bold text-indigo-300 mt-1">{LEETCODE.rating}</div>
              </div>
            </div>

            {/* Achievements details */}
            <ul className="space-y-4">
              {LEETCODE.achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Profile Link */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <a 
                href={LEETCODE.leetcodeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                <Code2 className="w-4 h-4" />
                View LeetCode Profile
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);