import Link from "next/link";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "AI-Powered Mortgage Underwriting Automation",
      company: "United Wholesale Mortgage",
      slug: "uwm-ai-underwriting",
      description:
        "Spearheaded quality engineering for GenAI-powered underwriting automation leveraging RAG and agentic workflows",
      impact: [
        "70% reduction in manual underwriting time",
        "35% improvement in accuracy",
        "FINRA compliance achieved"
      ],
      tags: ["AI/ML", "RAG", "LLM Testing", "FinTech"]
    },
    {
      title: "Enterprise AWS Cloud Migration",
      company: "Deluxe Media Inc",
      slug: "deluxe-aws-migration",
      description:
        "Led end-to-end quality engineering for enterprise-level on-premises to AWS cloud migration",
      impact: [
        "35% improvement in test execution speed",
        "30% increase in deployment frequency",
        "Zero downtime migration"
      ],
      tags: ["AWS", "Cloud Migration", "DevOps", "CI/CD"]
    },
    {
      title: "AI-Assisted Test Automation Framework",
      company: "Deluxe Media Inc",
      slug: "deluxe-ai-automation",
      description:
        "Implemented prompt engineering with LLMs to revolutionize test automation development",
      impact: [
        "70% reduction in test development time",
        "60% increase in test coverage",
        "$110K cost savings"
      ],
      tags: ["AI", "Selenium", "Python", "GitHub Copilot"]
    },
    {
      title: "Global Team Transformation & TCOE Implementation",
      company: "Accenture",
      slug: "accenture-tcoe",
      description:
        "Built and led high-performing global SDET team implementing Test Center of Excellence frameworks",
      impact: [
        "30% increase in automation efficiency",
        "60% reduction in execution time",
        "22% boost in release velocity"
      ],
      tags: ["Leadership", "TCOE", "Agile", "Global Team"]
    },
    {
      title: "Windows Phone OS Quality Assurance",
      company: "Accenture - Microsoft",
      slug: "accenture-windows-phone",
      description:
        "Developed and executed comprehensive test strategies for Windows Phone 7.5 Mango OS",
      impact: [
        "30% enhancement in defect detection",
        "40% improvement in client satisfaction",
        "30% faster time-to-market"
      ],
      tags: ["Mobile Testing", "Microsoft", "Coded UI", "Test Strategy"]
    },
    {
      title: "Performance Testing Cost Optimization",
      company: "Deluxe Media Inc",
      slug: "deluxe-performance-optimization",
      description:
        "Transformed performance testing by migrating from LoadRunner to open-source solutions",
      impact: [
        "$110K annual cost savings",
        "Improved scalability",
        "Enhanced CI/CD integration"
      ],
      tags: ["Performance Testing", "JMeter", "K6", "Cost Optimization"]
    }
  ];

  return (
    <div className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
        <p className="text-lg text-gray-400 mb-12">
          Deep dive into impactful projects demonstrating technical expertise
          and measurable business outcomes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-900/20 flex flex-col"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                <p className="text-blue-400 text-sm mb-3">{study.company}</p>
                <p className="text-gray-300 mb-4">{study.description}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">
                  KEY IMPACT:
                </h3>
                <ul className="space-y-1">
                  {study.impact.map((item, iIndex) => (
                    <li
                      key={iIndex}
                      className="text-sm text-gray-300 flex items-start"
                    >
                      <span className="text-green-400 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="bg-purple-900/20 text-purple-300 px-2 py-1 rounded text-xs border border-purple-800/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
