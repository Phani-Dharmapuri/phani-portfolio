export default function Experience() {
  const experiences = [
    {
      title: "AI Engineer III, Quality Engineering",
      company: "United Wholesale Mortgage (UWM)",
      location: "Detroit Metro, MI, USA",
      period: "March 2025 - Present",
      highlights: [
        "Spearheading an AI Engineering team of 11 Quality Engineers ensuring product quality of GenAI solution for underwriting automation leveraging agentic workflows and RAG-based Agentic AI",
        "Architected and implemented end-to-end testing strategies for AI-driven underwriting workflows including document parsing, eligibility checks, and credit risk analysis",
        "Designed scalable test automation frameworks for LLM-integrated mortgage processing workflows validating critical AI functions: document classification, W-2/paystub data extraction, OCR, LOS integration, and auto underwriting approval",
        "Implemented Shift-Left Testing practices including TDD, Unit Tests, and Integration Tests using C# ASP.Net, MVC, Entity Framework, WebApplicationFactory, Wiremock, Xunit, RestSharp, Nunit, SQL, Cosmos DB, and PactFlow",
        "Integrated CI/CD pipelines using Thunder Client, K6, BitBucket, TestKube, and Dynatrace ensuring high reliability, FINRA regulatory compliance, and accelerated deployment",
        "Conducted load, stress, scalability, and volume testing using JMeter and K6 evaluating system behavior under diverse conditions",
        "Collaborated cross-functionally with AI engineers, data scientists, and product owners to define testable AI acceptance criteria and release gating thresholds"
      ],
      technologies: [
        "C#",
        "ASP.Net Core",
        "Entity Framework",
        "XUnit",
        "RestSharp",
        "Cosmos DB",
        "K6",
        "JMeter",
        "BitBucket",
        "TestKube",
        "Dynatrace",
        "RAG",
        "LLM"
      ]
    },
    {
      title: "Senior Software Engineering Lead, Quality",
      company: "Deluxe Media Inc",
      location: "San Diego, CA, USA",
      period: "September 2015 - March 2025",
      highlights: [
        "Led a team of 9 Software Developers in agile DevOps culture, achieving 30% increase in deployment frequency and 35% improvement in product quality",
        "Spearheaded end-to-end software quality engineering during enterprise-level on-prem to AWS Cloud migration, achieving 35% improvement in test execution speed",
        "Architected robust Python, Selenium WebDriver, and PyTest framework incorporating Page Object Model, OOP principles, and parallel execution via Selenium Grid",
        "Applied prompt engineering with LLMs (GitHub Copilot, ChatGPT) achieving 70% reduction in test development time and 60% increase in test coverage",
        "Transformed performance testing by replacing LoadRunner with JMeter, saving $110K in licensing costs",
        "Spearheaded comprehensive SQE initiatives on AWS Microservices platform, achieving 35% reduction in production defects and 20% increase in release frequency",
        "Created dashboards using Datadog and Splunk, collaborated with SREs on APM and observability",
        "Developed Pulse platform tracking 150+ microservice versions across environments"
      ],
      technologies: [
        "Python",
        "Selenium",
        "PyTest",
        "AWS",
        "Jenkins",
        "Docker",
        "JMeter",
        "Postman",
        "JavaScript",
        "Datadog",
        "Splunk"
      ]
    },
    {
      title: "Software Engineering Team Lead",
      company: "Accenture",
      location:
        "Hartford, CT, USA | Cape Town, South Africa | Hyderabad, India",
      period: "June 2010 - September 2015",
      highlights: [
        "Built and led high-performing global team of 12 SDETs across multiple locations managing System Integration Testing, Release Management, and Delivery",
        "Transformed SQE practices by implementing Accenture's TCOE frameworks, increasing automation efficiency by 30% and reducing execution time by 60%",
        "Developed and executed test strategies for Windows Phone 7.5 Mango OS, enhancing defect detection by 30% and improving client satisfaction by 40%",
        "Built automated regression and end-to-end test suites using Microsoft Test Manager (MTM), Coded UI, and VSTF, boosting release velocity by 22%",
        "Developed comprehensive test plans providing visibility into risks and release readiness, leading to 20% reduction in post-release issues",
        "Collaborated with cross-functional teams driving root cause analysis and high-quality solutions",
        "Provided technical guidance and coaching resulting in 25% increase in team efficiency"
      ],
      technologies: [
        "Microsoft Test Manager",
        "Coded UI",
        "VSTF",
        "C#",
        ".NET",
        "SQL Server",
        "Windows Phone"
      ]
    },
    {
      title: "Senior Software Test Engineer",
      company: "Coforge (formerly NIIT Technologies)",
      location: "Melbourne, VIC, Australia | New Delhi, India",
      period: "December 2007 - June 2010",
      highlights: [
        "Implemented test strategies reducing production defects by 50% and improving product quality by 15%",
        "Developed and executed 220+ custom automated test scripts using VB Scripts and HP QTP, leading to 40% reduction in manual testing effort",
        "Led end-to-end test automation with HP QTP 9.0 and HP QC, enhancing test coverage by 35% and reducing cycle time by 20%",
        "Streamlined defect management with HP Quality Center, improving tracking accuracy by 25% and resolution time by 30%",
        "Automated backend testing with SQL queries, resolving 16 critical defects pre-release",
        "Conducted requirement analysis and developed traceability matrix, reducing redundancy by 30%"
      ],
      technologies: [
        "HP QTP/UFT",
        "HP Quality Center",
        "VBScript",
        "SQL",
        "Test Automation"
      ]
    }
  ];

  return (
    <div className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional Experience
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          18 years of progressive experience in quality engineering and test
          automation leadership
        </p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg p-8 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-900/20"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <p className="text-xl text-blue-400">{exp.company}</p>
                  <p className="text-gray-400">{exp.period}</p>
                </div>
                <p className="text-gray-500">{exp.location}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">
                  Key Achievements:
                </h3>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">▸</span>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-300">
                  Technologies:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="bg-blue-900/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Timeline Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Career Impact Summary
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">18+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-sm text-gray-400">Team Members Led</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-sm text-gray-400">Major Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-sm text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
