import React, { useState, useEffect } from 'react';
import { Clock, Code, Database, Globe, Mail, Phone, MapPin, Download, Github, ExternalLink } from 'lucide-react';
import { mockData } from './mock';

// Disable right-click
document.addEventListener('contextmenu', e => e.preventDefault());

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimeIST = (date) => {
    return date.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  };

  const handleResumeDownload = () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    const link = document.createElement('a');
    link.href = mockData.personal.resumeUrl;
    link.download = 'Urvish_Pancholi_Resume.pdf';
    link.click();
    alert('Resume downloaded! Thank you.');
    setEmail('');
  };

  const HomePage = () => (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <img
            src={mockData.personal.avatar}
            alt="Urvish Pancholi"
            className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-sky-400 object-cover"
          />
          <span className="text-sky-400 font-medium text-lg">HELLO, I'M</span>
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
            URVISH PANCHOLI
          </h1>
          <p className="text-2xl text-gray-200 mb-6">Full Stack Developer</p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting innovative digital solutions with cutting-edge technologies. 
            Passionate about clean code, user experience, and building scalable applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('about')}
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all"
            >
              About Me
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black px-8 py-3 rounded-full font-semibold transition-all"
            >
              Contact
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-16">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Frontend Development", desc: "Creating responsive interfaces with React, JavaScript, and modern CSS frameworks." },
              { icon: Database, title: "Backend Development", desc: "Building robust server-side applications with Node.js, Python, and databases." },
              { icon: Globe, title: "Full Stack Solutions", desc: "End-to-end development ensuring seamless integration across all layers." }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-black text-center bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-16">
          ABOUT ME
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={mockData.personal.avatar}
            alt="Urvish Pancholi"
            className="w-full max-w-md mx-auto rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-sky-400 mb-6">Who I Am</h2>
            <p className="text-gray-300 text-lg mb-6">{mockData.about.introduction}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="text-gray-400 text-sm">Name</p>
                <p className="text-white font-semibold">{mockData.personal.name}</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <p className="text-gray-400 text-sm">Role</p>
                <p className="text-white font-semibold">{mockData.personal.title}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-sky-400 mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.about.skills.map((skillGroup, i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-6">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.technologies.map((tech, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-sky-400 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mockData.projects.map((project, i) => (
              <div key={i} className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="bg-sky-400/20 text-sky-400 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.codeUrl}
                  className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ResumePage = () => (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-8">
          MY RESUME
        </h1>
        <div className="bg-gray-900 p-8 rounded-xl">
          <Download className="w-16 h-16 text-sky-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Download Resume</h2>
          <p className="text-gray-400 mb-8">
            Please provide your email to download my professional resume.
          </p>
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:border-sky-400 focus:outline-none"
            />
            <button
              onClick={handleResumeDownload}
              className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all"
            >
              Download Resume PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-black text-center bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-16">
          GET IN TOUCH
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-sky-400 mb-8">Let's Connect</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: mockData.personal.email },
                { icon: Phone, label: "Phone", value: mockData.personal.phone },
                { icon: MapPin, label: "Location", value: mockData.personal.location }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href={mockData.socialMedia.github}
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-sky-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${mockData.socialMedia.email}`}
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-sky-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:border-sky-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:border-sky-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:border-sky-400 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:border-sky-400 focus:outline-none resize-none"
              ></textarea>
              <button
                type="button"
                onClick={() => alert('Message sent! (This is a demo)')}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 text-sm text-center">
          <Clock className="inline w-4 h-4 mr-2" />
          IST: {formatTimeIST(currentTime)}
        </div>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-sky-400 text-xl font-bold">URVISH PANCHOLI</div>
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'resume', 'contact'].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === page ? 'text-sky-400' : 'text-white hover:text-sky-400'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'resume' && <ResumePage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Urvish Pancholi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
