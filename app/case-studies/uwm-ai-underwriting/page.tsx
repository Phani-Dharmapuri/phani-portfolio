import Link from "next/link";

export default function UWMCaseStudy() {
  return (
    <div className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/case-studies"
          className="text-blue-400 hover:text-blue-300 mb-6 inline-block"
        >
          ← Back to Case Studies
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI-Powered Mortgage Underwriting Automation
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          United Wholesale Mortgage (UWM)
        </p>

        <div className="prose prose-invert max-w-none">
          {/* Executive Summary */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
              <p className="text-gray-300 leading-relaxed">
                Led quality engineering for a revolutionary GenAI-powered
                underwriting automation solution leveraging agentic workflows
                and RAG-based AI. Spearheaded a team of 11 quality engineers to
                ensure the reliability, accuracy, and compliance of AI-driven
                mortgage processing workflows.
              </p>
            </div>
          </section>

          {/* Business Challenge */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Business Challenge</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                United Wholesale Mortgage faced several critical challenges in
                their traditional underwriting process:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Manual underwriting processes taking 5-7 days per application
                </li>
                <li>
                  High error rates in document parsing and data extraction
                </li>
                <li>Inconsistent decision-making across underwriters</li>
                <li>
                  Difficulty maintaining FINRA regulatory compliance at scale
                </li>
                <li>
                  Limited ability to handle volume spikes during market surges
                </li>
                <li>
                  Need to validate AI model accuracy and reliability before
                  production deployment
                </li>
              </ul>
            </div>
          </section>

          {/* Strategic Solution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Strategic Solution</h2>

            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              1. AI Testing Framework Architecture
            </h3>
            <p className="text-gray-300 mb-4">
              Designed and implemented a comprehensive testing framework
              specifically for LLM-integrated workflows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>
                Created test automation for document classification accuracy
                validation
              </li>
              <li>
                Built OCR quality assessment pipelines for W-2 and paystub
                extraction
              </li>
              <li>
                Developed LOS (Loan Origination System) integration testing
                suites
              </li>
              <li>Implemented automated underwriting decision validation</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              2. Shift-Left Testing Implementation
            </h3>
            <p className="text-gray-300 mb-4">
              Embedded testing early in the development lifecycle using:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  <strong>TDD Practices:</strong> Unit tests written before
                  implementation code
                </li>
                <li>
                  <strong>Integration Testing:</strong> C# ASP.Net, MVC, Entity
                  Framework
                </li>
                <li>
                  <strong>Contract Testing:</strong> PactFlow for microservices
                  validation
                </li>
                <li>
                  <strong>Mocking:</strong> Wiremock for external service
                  simulation
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              3. Performance & Scalability Testing
            </h3>
            <p className="text-gray-300 mb-4">
              Conducted comprehensive performance testing to ensure system
              reliability:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>
                Load testing simulating 10,000+ concurrent underwriting requests
              </li>
              <li>Stress testing to identify system breaking points</li>
              <li>Volume testing with large document batches</li>
              <li>
                Scalability validation for cloud infrastructure auto-scaling
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              4. CI/CD Pipeline Integration
            </h3>
            <p className="text-gray-300 mb-4">
              Automated testing within deployment pipelines using:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "BitBucket",
                "TestKube",
                "Thunder Client",
                "K6",
                "Dynatrace"
              ].map((tool) => (
                <span
                  key={tool}
                  className="bg-blue-900/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-800/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Technologies Used */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Technologies & Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  category: "Programming",
                  tools: ["C#", "ASP.Net Core", "Entity Framework"]
                },
                {
                  category: "Testing Frameworks",
                  tools: ["XUnit", "RestSharp", "NUnit"]
                },
                { category: "Database", tools: ["SQL", "Cosmos DB"] },
                { category: "Performance", tools: ["JMeter", "K6"] },
                {
                  category: "CI/CD",
                  tools: ["BitBucket", "TestKube", "Dynatrace"]
                },
                {
                  category: "AI/ML",
                  tools: ["RAG", "LLM Testing", "Agentic Workflows"]
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-800 rounded-lg p-4"
                >
                  <h4 className="font-bold text-sm mb-2 text-blue-400">
                    {item.category}
                  </h4>
                  <ul className="space-y-1">
                    {item.tools.map((tool, tIndex) => (
                      <li key={tIndex} className="text-sm text-gray-300">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Quantifiable Outcomes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Quantifiable Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-800/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  70%
                </div>
                <p className="text-gray-300">
                  Reduction in manual underwriting time
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">35%</div>
                <p className="text-gray-300">
                  Improvement in decision accuracy
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  100%
                </div>
                <p className="text-gray-300">FINRA compliance achieved</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-800/30 rounded-lg p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  3x
                </div>
                <p className="text-gray-300">Increase in processing capacity</p>
              </div>
            </div>
          </section>

          {/* Key Learnings */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Key Learnings & Best Practices
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h4 className="font-bold mb-1">AI Model Validation</h4>
                <p className="text-gray-300">
                  Established clear metrics for LLM accuracy, including
                  precision, recall, and F1 scores for document classification
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h4 className="font-bold mb-1">Test Data Strategy</h4>
                <p className="text-gray-300">
                  Created diverse test data sets covering edge cases, rare
                  scenarios, and adversarial inputs to ensure model robustness
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h4 className="font-bold mb-1">Regulatory Compliance</h4>
                <p className="text-gray-300">
                  Implemented automated compliance checks aligned with FINRA
                  requirements for AI-driven financial decisions
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h4 className="font-bold mb-1">
                  Cross-functional Collaboration
                </h4>
                <p className="text-gray-300">
                  Worked closely with AI engineers and data scientists to define
                  testable acceptance criteria and release gates
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="text-gray-300 leading-relaxed">
              This project showcased the critical importance of comprehensive
              quality engineering in AI-powered financial systems. By
              implementing robust testing frameworks, shift-left practices, and
              continuous validation pipelines, we successfully delivered a
              production-ready AI underwriting system that dramatically improved
              efficiency while maintaining regulatory compliance and accuracy
              standards.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
