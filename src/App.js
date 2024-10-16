import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image1 from './assets/aws-sol-arc-asso.png';
import Image2 from './assets/Backend-certificate-infoedge.jfif';
import Image3 from './assets/IMG-20240829-WA0001.jpg';
import Image4 from './assets/IMG-20240829-WA0002.jpg';
import Image5 from './assets/python.png';
import Image6 from './assets/udemy-DA.jpg';
import Image7 from './assets/Screenshot 2024-10-16 221507.png';
import Image8 from './assets/Screenshot 2024-10-16 221618.png';
import Image9 from './assets/Screenshot 2024-10-16 221702.png';



const StarryBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

const Comet = () => {
  const [showComet, setShowComet] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowComet(true);
      setTimeout(() => setShowComet(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!showComet) return null;

  return (
    <div className="comet" />
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'education', 'certifications'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white relative">
      <StarryBackground />
      <Comet />
      <nav className="bg-blue-600 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kaverappa M M</h1>
          <ul className="flex space-x-4">
            {['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Certifications'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-blue-200 transition-colors ${
                    activeSection === item.toLowerCase() ? 'border-b-2' : ''
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <motion.section
          id="home"
          className="my-8"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-4">FullStack Developer + DevOps</h2>
          <p className="text-xl mb-4">
          Fullstack developer with DevOps expertise, committed to delivering scalable, high-performance solutions by integrating development and operations to streamline workflows and drive innovation through end-to-end technical excellence.
          </p>
          <div className="flex flex-wrap space-x-4">
            <a href="mailto:kavankaverappa5@gmail.com" className="flex items-center text-blue-300 hover:text-blue-100 transition-colors">
              ✉️ Email
            </a>
            <a href="tel:9740495812" className="flex items-center text-blue-300 hover:text-blue-100 transition-colors">
              📞 Phone
            </a>
            <a href="https://www.linkedin.com/in/kaverappa-mm" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-300 hover:text-blue-100 transition-colors">
              🔗 LinkedIn
            </a>
            <a href="https://github.com/ka25van" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-300 hover:text-blue-100 transition-colors">
              💻 GitHub
            </a>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="my-8"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Senior System Engineer</h3>
            <p className="text-gray-300">Infosys Limited, Mysore | April 2022-Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-200">
              <li>Designed and developed high-quality components for optimal performance and user satisfaction.</li>
              <li>Enhanced user experience and efficiency by streamlining processes and improving features.</li>
              <li>Maintained a scalable codebase and collaborative workflow to drive project success.</li>
            </ul>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mt-4">
            <h3 className="text-2xl font-semibold">System Administrator</h3>
            <p className="text-gray-300">Diya Systems Pvt Ltd (Glow Touch), Mysore | December 2021-April 2022</p>
            <ul className="list-disc list-inside mt-2 text-gray-200">
              <li>Provided top-notch web advisory services, resolved complex issues, and recommended optimal solutions.</li>
              <li>Demonstrated effective communication skills and delivered tailored solutions.</li>
              <li>Leveraged expertise in marketing, customer requirements, and technical skills.</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="my-8"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold">Meridian-Events</h3>
              <ul className="list-disc list-inside mt-2 text-gray-200">
                <li>Developed Live Q&A Feature with Angular and Node.js, tracking responses in graphs.</li>
                <li>Created a Chatbot using existing API's to enhance user engagement and support.</li>
                <li>Built a RAG chatbot using LLM, utilizing the platform data.</li>
                <li>Enhanced features and fixed bugs reported in JIRA.</li>
              </ul>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold">CampMaster-DevOps Project</h3>
              <ul className="list-disc list-inside mt-2 text-gray-200">
                <li>Developed a highly secure AWS EKS cluster with robust security rules.</li>
                <li>Implemented CI/CD pipelines using Jenkins, integrating SonarQube and Nexus.</li>
                <li>Leveraged Grafana for comprehensive monitoring and logging tools for optimized performance.</li>
              </ul>
              <a href="https://github.com/ka25van/CampMaster-" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 mt-2 inline-block">
                View Project
              </a>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold">Advanced Backend Development</h3>
              <ul className="list-disc list-inside mt-2 text-gray-200">
                <li>Engineered a robust Node.js backend for a video hosting platform.</li>
                <li>Fortified security with JWT, bcrypt, and access/refresh tokens.</li>
                <li>Meticulously crafted a comprehensive project for a valuable learning experience.</li>
              </ul>
              <a href="https://github.com/ka25van/backendAdvanced" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 mt-2 inline-block">
                View Project
              </a>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h3 className="text-2xl font-semibold mt-9">More works uploaded here</h3>
              <a href="https://github.com/ka25van/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 mt-2 inline-block">
                View Work
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="my-8"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-2">Full-stack Development</h3>
            <p className="text-gray-200">HTML, CSS, JS, Angular, React, Python, Node.js, MongoDB, Postgresql, MySql ,REST API</p>
            
            <h3 className="text-2xl font-semibold mt-4 mb-2">Cloud and DevOps</h3>
            <p className="text-gray-200">Linux, AWS, Docker, Kubernetes, CI/CD pipelines, Security best practices</p>
            
            <h3 className="text-2xl font-semibold mt-4 mb-2">Data Science</h3>
            <p className="text-gray-200">Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, SQL</p>
            
            <h3 className="text-2xl font-semibold mt-4 mb-2">Tools</h3>
            <p className="text-gray-200">Postman, Git, GitHub, npm libraries, JIRA, Confluence, LLM's, AI...</p>
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="my-8"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Bachelor of Engineering</h3>
            <p className="text-gray-300">Coorg Institute Of Technology | 2021</p>
            <p className="text-gray-200">GPA: 8.0</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mt-4">
            <h3 className="text-2xl font-semibold">Pre-University</h3>
            <p className="text-gray-300">Vidyanikethana PU College, Gonikoppal | 2017</p>
            <p className="text-gray-200">GPA: 80.33</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mt-4">
            <h3 className="text-2xl font-semibold">SSLC</h3>
            <p className="text-gray-300">St.Thomas English Medium School, Gonikoppal | 2015</p>
            <p className="text-gray-200">GPA: 90.56</p>
          </div>
        </motion.section>

        <motion.section
          id="certifications"
          className="my-8"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <ul className="list-disc list-inside text-gray-200">
              <li>Backend Certification by mycareernet</li>
              <li>Infosys Certified AWS Solutions Architect Associate</li>
              <li>Infosys Certified Cloud Test Professional</li>
              <li>Data Analytics projects by udemy</li>
              <li>Generative AI Fundamentals by Databricks</li>
              <li>AWS Cloud Practitioner</li>
              <li>Web Development and SQL by MIMO</li>
            </ul>
          </div>
        </motion.section>

        <motion.section>
        <div className="mt-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <img src={Image1} alt="Certification 1" className="rounded-lg shadow-lg" />
      <img src={Image2} alt="Certification 2" className="rounded-lg shadow-lg" />
      <img src={Image3} alt="Certification 3" className="rounded-lg shadow-lg" />
      <img src={Image4} alt="Certification 4" className="rounded-lg shadow-lg" />
      <img src={Image5} alt="Certification 5" className="rounded-lg shadow-lg" />
      <img src={Image6} alt="Certification 6" className="rounded-lg shadow-lg" />
      <img src={Image7} alt="Certification 7" className="rounded-lg shadow-lg" />
      <img src={Image8} alt="Certification 8" className="rounded-lg shadow-lg" />
      <img src={Image9} alt="Certification 9" className="rounded-lg shadow-lg" />
      
    </div>
  </div>
        </motion.section>
      </main>

      {/* <footer className="bg-blue-600 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Kaverappa M M. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Portfolio;