"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

interface ChatOption {
  text: string;
  next: string;
}

interface ChatNode {
  message: string;
  options?: ChatOption[];
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentNode, setCurrentNode] = useState("start");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scripted conversation flow
  const chatFlow: Record<string, ChatNode> = {
    start: {
      message:
        "👋 Hi! I'm Phani's AI assistant. I can help you learn about his experience, skills, and availability. What would you like to know?",
      options: [
        { text: "📊 Experience & Background", next: "experience" },
        { text: "🛠️ Technical Skills", next: "skills" },
        { text: "📁 Case Studies", next: "case-studies" },
        { text: "📅 Availability", next: "availability" }
      ]
    },
    experience: {
      message:
        "Phani has 18 years of experience as a Principal SDET and Quality Engineering Leader. He's worked with Fortune 500 companies like Microsoft, Accenture, and Deluxe, leading digital transformation and test automation initiatives.\n\nKey highlights:\n• Led global testing teams (5-50+ members)\n• Architected enterprise-level test frameworks\n• Implemented AI/ML testing strategies\n• Drove DevOps and CI/CD adoption",
      options: [
        { text: "🤖 Tell me about AI/Automation work", next: "ai-automation" },
        { text: "☁️ Cloud & DevOps experience?", next: "cloud-devops" },
        { text: "👥 Leadership experience?", next: "leadership" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    skills: {
      message:
        "Phani's technical expertise spans:\n\n🧪 Testing & Automation:\n• Selenium, Appium, Cypress, Playwright\n• Java, Python, TypeScript, C#\n• BDD/Cucumber, TestNG, JUnit\n\n☁️ Cloud & DevOps:\n• AWS (Solutions Architect certified)\n• Docker, Kubernetes, Jenkins\n• CI/CD pipelines (GitHub Actions, Azure DevOps)\n\n🤖 AI/ML:\n• LLM testing & validation\n• RAG evaluation frameworks\n• AI model quality assurance",
      options: [
        { text: "📚 More technical details", next: "technical-details" },
        { text: "📜 Certifications?", next: "certifications" },
        { text: "📁 Show me case studies", next: "case-studies" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    "ai-automation": {
      message:
        "Phani recently led groundbreaking AI testing work:\n\n🏦 UWM AI Underwriting System:\n• Developed RAG evaluation framework\n• Created LLM response validation system\n• Built hallucination detection mechanisms\n• Reduced testing time by 40%\n• Achieved 95% accuracy in automated AI validation\n\nHe specializes in testing AI systems, LLMs, and ensuring responsible AI deployment.",
      options: [
        { text: "🔍 Tell me more about this project", next: "uwm-case-study" },
        { text: "📊 Other AI projects?", next: "case-studies" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    "cloud-devops": {
      message:
        "Phani has extensive cloud and DevOps experience:\n\n☁️ AWS Cloud Migration (Deluxe):\n• Led migration of 50+ microservices to AWS\n• Implemented multi-region deployment strategy\n• Set up auto-scaling and disaster recovery\n• Reduced infrastructure costs by $110K annually\n• Achieved zero downtime during migration\n\n🔧 DevOps Leadership:\n• Built CI/CD pipelines from scratch\n• Containerized legacy applications\n• Implemented infrastructure as code (Terraform)\n• Established monitoring with CloudWatch/Grafana",
      options: [
        { text: "📈 What were the results?", next: "metrics" },
        { text: "📁 Other projects?", next: "case-studies" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    leadership: {
      message:
        "Phani has proven leadership experience:\n\n👥 Team Building:\n• Scaled testing team from 5 to 50+ members\n• Managed global teams across US, India, Philippines\n• Mentored 20+ engineers to senior positions\n\n📊 Strategic Impact:\n• Increased test coverage from 40% to 70%\n• Reduced defect leakage by 35%\n• Cut testing cycle time by 50%\n• Saved $500K+ through automation\n\n🎯 He excels at building high-performing teams and driving quality culture.",
      options: [
        { text: "📈 Show me the metrics", next: "metrics" },
        { text: "📁 Case studies", next: "case-studies" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    "case-studies": {
      message:
        "Here are Phani's key projects:\n\n1. 🏦 UWM AI Underwriting - RAG/LLM testing (40% faster)\n2. 💳 Deluxe AWS Migration - Cloud transformation ($110K saved)\n3. 🏢 Accenture Testing COE - Built 50+ member team\n4. 📱 Microsoft Windows Phone - Performance testing\n\nWhich one interests you?",
      options: [
        { text: "🏦 UWM AI Project", next: "uwm-case-study" },
        { text: "💳 Deluxe AWS Migration", next: "aws-migration" },
        { text: "🏢 Accenture Testing COE", next: "accenture-tcoe" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    "uwm-case-study": {
      message:
        "🏦 UWM AI Underwriting System\n\nChallenge: Test an AI system that processes mortgage documents using LLMs and RAG.\n\nSolution:\n• Built RAG evaluation framework\n• Created prompt validation system\n• Developed hallucination detection\n• Automated end-to-end AI testing\n\nResults:\n✅ 40% reduction in testing time\n✅ 95% accuracy in automated validation\n✅ Zero AI-related production issues\n✅ Scalable framework for future AI features",
      options: [
        { text: "🛠️ What tools/tech were used?", next: "technical-details" },
        { text: "📁 See other projects", next: "case-studies" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    "aws-migration": {
      message:
        "💳 Deluxe Corporation - AWS Cloud Migration\n\nChallenge: Migrate 50+ legacy microservices to AWS with zero downtime.\n\nSolution:\n• Multi-region AWS architecture\n• Containerization with Docker/ECS\n• Automated testing in cloud environment\n• Blue-green deployment strategy\n\nResults:\n✅ $110K annual cost savings\n✅ Zero downtime during migration\n✅ 99.99% uptime SLA achieved\n✅ 60% faster deployment cycles",
      options: [
        { text: "📊 More impact metrics", next: "metrics" },
        { text: "📁 See other projects", next: "case-studies" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    "accenture-tcoe": {
      message:
        "🏢 Accenture - Testing Center of Excellence\n\nChallenge: Build enterprise-wide testing practice from ground up.\n\nSolution:\n• Established testing standards & frameworks\n• Recruited and trained 50+ QA engineers\n• Implemented test automation across 20+ projects\n• Created reusable component library\n\nResults:\n✅ Team grew from 5 to 50+ members\n✅ $500K+ savings through automation\n✅ 95% employee retention rate\n✅ Served as blueprint for other departments",
      options: [
        { text: "👥 Leadership approach?", next: "leadership" },
        { text: "📁 See other projects", next: "case-studies" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    certifications: {
      message:
        "📜 Professional Certifications:\n\n• AWS Certified Solutions Architect\n• AWS Certified Developer Associate\n• Certified Scrum Master (CSM)\n• ISTQB Advanced Test Automation Engineer\n• SAFe 5 Agilist\n\nPhani continuously updates his skills and stays current with industry trends.",
      options: [
        { text: "🛠️ Technical skills", next: "skills" },
        { text: "📁 Case studies", next: "case-studies" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    "technical-details": {
      message:
        "🛠️ Technical Implementation Highlights:\n\n🧪 Testing Frameworks:\n• Custom Page Object Model architecture\n• Data-driven testing with Excel/JSON\n• API testing with REST Assured\n• Performance testing with JMeter/Gatling\n\n🤖 AI Testing Methodology:\n• Prompt engineering validation\n• Output consistency checks\n• Hallucination detection algorithms\n• Semantic similarity scoring\n\n☁️ CI/CD Integration:\n• Jenkins/GitHub Actions pipelines\n• Parallel test execution\n• Automated reporting dashboards\n• Slack/Teams notifications",
      options: [
        { text: "📊 Show me the impact", next: "metrics" },
        { text: "📁 Case studies", next: "case-studies" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    metrics: {
      message:
        "📊 Key Impact Metrics:\n\n👥 Team Leadership:\n• Scaled teams 10x (5 → 50+ members)\n• 95% retention rate\n• 20+ engineers mentored to senior roles\n\n📈 Quality Improvements:\n• Test coverage: 40% → 70%\n• Defect reduction: 35%\n• Testing cycle time: -50%\n\n💰 Cost Optimization:\n• $500K+ automation savings\n• $110K cloud infrastructure savings\n• 40% faster time-to-market",
      options: [
        {
          text: "📁 See the projects behind these numbers",
          next: "case-studies"
        },
        { text: "👥 Leadership style", next: "leadership" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    availability: {
      message:
        "📅 Phani's Availability:\n\n✅ Open to new opportunities\n📍 Based in Detroit Metro, Michigan\n🌍 Open to remote work or hybrid roles\n🎯 Interested in: Leadership roles, consulting, or speaking engagements\n\n📧 Contact: dharmapuri.phani@gmail.com\n💼 LinkedIn: linkedin.com/in/phani-dharmapuri\n\nTypically responds within 24 hours!",
      options: [
        { text: "📧 Go to contact page", next: "contact-form" },
        { text: "📁 Review case studies first", next: "case-studies" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    },
    "contact-form": {
      message:
        "Great! You can reach out through:\n\n📧 Email: dharmapuri.phani@gmail.com\n💼 LinkedIn: linkedin.com/in/phani-dharmapuri\n📝 Contact Form: Use the contact page on this portfolio\n\nPhani would love to discuss how he can help with your quality engineering, AI testing, or digital transformation initiatives!",
      options: [
        { text: "🔄 Start over", next: "start" },
        { text: "📁 Learn more about projects", next: "case-studies" },
        { text: "🛠️ Review skills", next: "skills" }
      ]
    },
    portfolio: {
      message:
        "📂 Navigate Portfolio:\n\n• Home - Overview and introduction\n• Experience - Detailed work history\n• Skills - Technical expertise\n• Case Studies - Project deep dives\n• Contact - Get in touch\n\nFeel free to explore, or I can guide you to specific sections!",
      options: [
        { text: "📊 Tell me about experience", next: "experience" },
        { text: "🛠️ Show technical skills", next: "skills" },
        { text: "🏠 Back to main menu", next: "start" }
      ]
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      const initialMessage: Message = {
        text: chatFlow[currentNode].message,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages([initialMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOptionClick = (option: ChatOption) => {
    // Add user's choice to messages
    const userMessage: Message = {
      text: option.text,
      sender: "user",
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);

    // Get bot's response after a short delay
    setTimeout(() => {
      const nextNode = chatFlow[option.next];
      if (nextNode) {
        const botMessage: Message = {
          text: nextNode.message,
          sender: "bot",
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, botMessage]);
        setCurrentNode(option.next);
      }
    }, 500);
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentNode("start");
    const initialMessage: Message = {
      text: chatFlow.start.message,
      sender: "bot",
      timestamp: new Date()
    };
    setMessages([initialMessage]);
  };

  const currentOptions = chatFlow[currentNode]?.options || [];

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Chat with Phani's AI</h3>
              <p className="text-xs text-blue-100">
                Ask about experience, skills & projects
              </p>
            </div>
            <button
              onClick={resetChat}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
              title="Reset conversation"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.sender === "bot"
                      ? "bg-white text-gray-800 shadow-sm border border-gray-200"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">
                    {msg.text}
                  </p>
                  <p
                    className={`text-xs mt-2 ${
                      msg.sender === "bot" ? "text-gray-400" : "text-blue-100"
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Options */}
          {currentOptions.length > 0 && (
            <div className="p-4 bg-white border-t border-gray-200 space-y-2">
              {currentOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-gray-800 rounded-xl transition-all duration-200 text-sm font-medium border border-blue-200 hover:border-blue-300 hover:shadow-md"
                  disabled={messages[messages.length - 1]?.sender === "user"}
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
