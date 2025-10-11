export default function About() {
  return (
    <div className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Accomplished Software Engineering Leader with{" "}
            <strong>18 years of experience</strong> driving software quality
            excellence through the design and implementation of scalable,
            maintainable, and high-performance quality engineering solutions.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Adept at architecting test automation frameworks and strategies for
            complex enterprise systems including cloud-based platforms and
            service-oriented architectures (SOA) to ensure superior product
            quality, reliability, and user acceptance.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Skilled in{" "}
            <strong>
              Generative AI, Prompt Engineering, building GenAI agents, Agentic
              workflows, OpenAI, Claude, Gemini, LangChain, RAG, and LLM Testing
            </strong>
            . Executed strategic SQE roadmaps for enterprise systems across
            Banking, FinTech, Financial Services, Insurance, CRM, Content
            Management, and Retail.
          </p>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Professional Background</h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                ✅ AWS Certified Cloud Practitioner with extensive cloud
                migration experience
              </li>
              <li>✅ Certified Scrum Master and SAFe practitioner</li>
              <li>
                ✅ Driving global quality engineering initiatives across USA,
                Australia, South Africa, Malaysia, and India
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Core Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                AI & Testing
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Evaluated FinTech underwriting chatbots built on RAG</li>
                <li>• Implemented LLM as a Judge (RAGAS) testing pipelines</li>
                <li>
                  • Measuring Faithfulness, Answer Relevance, Context Precision
                </li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                Automation Frameworks
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Playwright, Selenium, PyTest, Postman</li>
                <li>• Cypress, UFT, xUnit, NUnit, RestSharp</li>
                <li>• JMeter, K6, Cucumber</li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                Programming & Coding
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• C# ASP.Net Core, Entity Framework</li>
                <li>• JavaScript, TypeScript, Mocha, Chai, Axios</li>
                <li>• Python, Requests, Java</li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                Cloud & DevOps
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS: S3, EC2, Lambda, RDS, CloudWatch, CDN</li>
                <li>• Azure Blob, Kubernetes</li>
                <li>• CI/CD: Jenkins, GitHub, BitBucket, TestKube</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Key Achievements</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <p className="text-gray-300">
                <strong>35% reduction</strong> in pre-deployment defects through
                Shift-Left testing practices
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <p className="text-gray-300">
                <strong>70% reduction</strong> in test development time using
                AI-assisted test generation
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <p className="text-gray-300">
                <strong>$110K cost savings</strong> by transitioning from
                LoadRunner to JMeter/K6/Locust
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <p className="text-gray-300">
                <strong>60% increase</strong> in test coverage through
                comprehensive automation strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
