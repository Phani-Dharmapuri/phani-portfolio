export default function Skills() {
  const skillCategories = [
    {
      title: "Test Automation",
      icon: "🤖",
      skills: [
        "Selenium WebDriver",
        "Playwright",
        "Cypress",
        "Appium",
        "PyTest",
        "Postman",
        "Rest Assured",
        "UFT/QTP",
        "xUnit",
        "NUnit",
        "RestSharp",
        "Cucumber",
        "JMeter",
        "K6",
        "Locust"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      skills: [
        "Generative AI",
        "Prompt Engineering",
        "OpenAI",
        "Claude",
        "Gemini",
        "LangChain",
        "RAG (Retrieval Augmented Generation)",
        "LLM Testing",
        "RAGAS",
        "Agentic Workflows",
        "GenAI Agents"
      ]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        "C# / ASP.Net Core",
        "JavaScript / TypeScript",
        "Python",
        "Java",
        "SQL"
      ]
    },
    {
      title: "CI/CD & DevOps",
      icon: "🔄",
      skills: [
        "Jenkins",
        "GitHub Actions",
        "Azure DevOps",
        "BitBucket",
        "TestKube",
        "PORT",
        "SonarQube",
        "Docker",
        "Kubernetes",
        "Kafka"
      ]
    },
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: [
        "AWS (S3, EC2, Lambda, RDS)",
        "Azure (Blob, Kubernetes)",
        "CloudWatch",
        "CloudFront CDN",
        "Glacier",
        "PostgreSQL",
        "KMS"
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "Cosmos DB", "SQL Server", "MongoDB", "Big Data"]
    },
    {
      title: "Frameworks & Libraries",
      icon: "📚",
      skills: [
        "Entity Framework",
        "WebApplicationFactory",
        "Mocha",
        "Chai",
        "Axios",
        "Requests (Python)",
        "Wiremock",
        "PactFlow"
      ]
    },
    {
      title: "Testing Methodologies",
      icon: "📋",
      skills: [
        "Test-Driven Development (TDD)",
        "Behavior-Driven Development (BDD)",
        "Shift-Left Testing",
        "A/B Testing",
        "Performance Testing",
        "Load Testing",
        "Security Testing",
        "API Testing",
        "UI Automation",
        "Integration Testing",
        "Unit Testing"
      ]
    },
    {
      title: "Agile & Project Management",
      icon: "📊",
      skills: [
        "Certified Scrum Master",
        "SAFe",
        "Agile",
        "Scrum",
        "Kanban",
        "JIRA",
        "Stakeholder Management",
        "Quality Metrics & Reporting"
      ]
    },
    {
      title: "Observability & Monitoring",
      icon: "📈",
      skills: [
        "Datadog",
        "Dynatrace",
        "Splunk",
        "Allure Reports",
        "Application Performance Monitoring (APM)"
      ]
    }
  ];

  return (
    <div className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Skills & Expertise
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          Comprehensive technical skill set built over 18 years of experience in
          software quality engineering
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-900/20"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-900/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-800/30 hover:bg-blue-900/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-blue-600 transition-colors">
              <div className="text-3xl mb-2">☁️</div>
              <h3 className="font-bold mb-1">Azure AI-900</h3>
              <p className="text-sm text-gray-400">
                Microsoft Azure AI Fundamentals
              </p>
            </div>
            <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-blue-600 transition-colors">
              <div className="text-3xl mb-2">🌩️</div>
              <h3 className="font-bold mb-1">AWS Cloud Practitioner</h3>
              <p className="text-sm text-gray-400">Amazon Web Services</p>
            </div>
            <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-blue-600 transition-colors">
              <div className="text-3xl mb-2">🏃</div>
              <h3 className="font-bold mb-1">Certified Scrum Master</h3>
              <p className="text-sm text-gray-400">Agile Methodology</p>
            </div>
            <div className="border border-gray-800 rounded-lg p-6 text-center hover:border-blue-600 transition-colors">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-bold mb-1">HP Accredited</h3>
              <p className="text-sm text-gray-400">
                Integration Specialist | ITIL
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-xl font-bold mb-2">
                Master of Computer Applications
              </h3>
              <p className="text-gray-400 mb-1">Computer Science</p>
              <p className="text-sm text-gray-500">
                SRM Institute of Science and Technology
              </p>
              <p className="text-sm text-gray-500">San Diego, CA, USA</p>
            </div>
            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-xl font-bold mb-2">
                Master of Business Administration
              </h3>
              <p className="text-gray-400 mb-1">MBA</p>
              <p className="text-sm text-gray-500">Manipal University Sikkim</p>
              <p className="text-sm text-gray-500">Hyderabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
