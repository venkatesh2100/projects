import React from 'react';

const ResumeComponent: React.FC = () => {
  return (
    <div className="my-6 px-4 md:px-12 lg:px-24 bg-gradient-to-b  min-h-screen ">
      <div className="max-w-screen-lg mx-auto shadow-xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r   from-pink-600 to-purple-600 rounded-lg backdrop-blur-0 opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt  text-white p-6 text-center">
          <h1 className="text-4xl font-extrabold">Venkatesh Suravarapu</h1>
          <p className="mt-2 text-lg">
            <a href="mailto:thisisvenky.ynm@gmail.com" className="underline">
              thisisvenky.ynm@gmail.com
            </a>{' '}
            | +91 9346395054
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <a href="https://github.com/venkatesh2100" className="underline hover:text-blue-200">
              GitHub
            </a>
            <a href="https://linkedin.com/in/venkatesh2100" className="underline hover:text-blue-200">
              LinkedIn
            </a>
            <a href="https://x.com/venky_officials" className="underline hover:text-blue-200">
              Twitter
            </a>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10">
          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">
              Skills
            </h2>
            <p><strong>Programming:</strong> TypeScript, Java, Python, C, JavaScript, SQL, Lua, Bash</p>
            <p><strong>Technologies:</strong> AWS (ELB), Kubernetes, Docker, React.js, Next.js, Node.js, Redis, PostgreSQL, Tailwind CSS, Arch Linux</p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">
              Experience
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Open Source Contributor</h3>
              <p className="italic text-gray-600">Full Stack Developer | India</p>
              <p className="text-gray-500">May 2023 – Mar 2024</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Developed a full-stack e-commerce platform, improving transaction workflows and user experience.</li>
                <li>Completed a 2-month Google Arcade program, mastering cloud technologies with Google Cloud tools.</li>
                <li>Created a Linux and coding-focused YouTube channel, providing tutorials and tech insights.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">
              Projects
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Pay Wallet / Transaction App</h3>
              <p className="italic text-gray-600">Full Stack Developer | Kakinada, AP</p>
              <p className="text-gray-500">May 2024 – July 2024</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Built a web application for advanced backend transaction management, enhancing accessibility.</li>
                <li>Developed using React and Next.js (Auth), containerized with Docker Compose for scalability.</li>
                <li>Implemented secure user authentication and authorization via JWT with NextAuth integration.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">
              Education
            </h2>
            <p><strong>Bachelor of Engineering in Computer Science:</strong> Pragati Engineering College, Surampalem, AP (Oct 2022 – Apr 2026, 8.6 CGPA)</p>
            <p><strong>Senior Secondary School Certificate (MBiPC):</strong> Jawahar Navodaya Vidyalaya, Yanam, PY (July 2020 – Apr 2022, 85.6%)</p>
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">
              Certifications & Achievements
            </h2>
            <ul className="list-disc ml-6">
              <li>CS50 Certified: Earned certification from Harvard University in Python and Computer Science.</li>
              <li>Linux Foundation Open Source: Certified in open-source development practices.</li>
              <li>IBM DevOps Certification: Proficient in CI/CD, automation, and IaC concepts.</li>
            </ul>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">
              Links
            </h2>
            <ul className="list-disc ml-6">
              <li><a href="https://leetcode.com/u/venkatesh2100" className="text-blue-500 underline hover:text-blue-700">Leetcode</a></li>
              <li><a href="https://www.hackerrank.com/profile/22A31A05J4" className="text-blue-500 underline hover:text-blue-700">HackerRank</a></li>
              <li><a href="https://www.youtube.com/@codewithvenky?sub_confirmation=1" className="text-blue-500 underline hover:text-blue-700">YouTube Channel</a></li>
              <li><a href="https://paytm-iota.vercel.app/" className="text-blue-500 underline hover:text-blue-700">Pay Wallet App</a></li>
              <li><a href="https://medium-blog-six-gamma.vercel.app/" className="text-blue-500 underline hover:text-blue-700">Blog Site</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
