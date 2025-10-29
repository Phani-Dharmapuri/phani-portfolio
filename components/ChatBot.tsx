"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

interface QuickOption {
  icon: string;
  text: string;
  query: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Quick action options
  const quickOptions: QuickOption[] = [
    {
      icon: "📊",
      text: "Experience & Background",
      query: "Tell me about your experience"
    },
    {
      icon: "🛠️",
      text: "Technical Skills",
      query: "What are your technical skills?"
    },
    { icon: "🤖", text: "AI/ML Projects", query: "Tell me about AI projects" },
    {
      icon: "☁️",
      text: "Cloud & DevOps",
      query: "What's your cloud experience?"
    },
    { icon: "📁", text: "Case Studies", query: "Show me your projects" },
    { icon: "📧", text: "Contact Info", query: "How can I contact you?" }
  ];

  // Knowledge base for answering questions
  const knowledgeBase: Record<string, string> = {
    experience:
      "Phani has 18 years of experience as a Principal SDET and Quality Engineering Leader. He's worked with Fortune 500 companies like Microsoft, Accenture, and Deluxe, leading digital transformation and test automation initiatives.\n\nKey highlights:\n• Led global testing teams (5-50+ members)\n• Architected enterprise-level test frameworks\n• Implemented AI/ML testing strategies\n• Drove DevOps and CI/CD adoption",
    skills:
      "Phani's technical expertise spans:\n\n🧪 Testing & Automation:\n• Selenium, Appium, Cypress, Playwright\n• Java, Python, TypeScript, C#\n• BDD/Cucumber, TestNG, JUnit\n\n☁️ Cloud & DevOps:\n• AWS (Solutions Architect certified)\n• Docker, Kubernetes, Jenkins\n• CI/CD pipelines (GitHub Actions, Azure DevOps)\n\n🤖 AI/ML:\n• LLM testing & validation\n• RAG evaluation frameworks\n• AI model quality assurance",
    ai: "Phani recently led groundbreaking AI testing work:\n\n🏦 UWM AI Underwriting System:\n• Developed RAG evaluation framework\n• Created LLM response validation system\n• Built hallucination detection mechanisms\n• Reduced testing time by 40%\n• Achieved 95% accuracy in automated AI validation\n\nHe specializes in testing AI systems, LLMs, and ensuring responsible AI deployment.",
    cloud:
      "Phani has extensive cloud and DevOps experience:\n\n☁️ AWS Cloud Migration (Deluxe):\n• Led migration of 50+ microservices to AWS\n• Implemented multi-region deployment strategy\n• Set up auto-scaling and disaster recovery\n• Reduced infrastructure costs by $110K annually\n• Achieved zero downtime during migration",
    leadership:
      "Phani has proven leadership experience:\n\n👥 Team Building:\n• Scaled testing team from 5 to 50+ members\n• Managed global teams across US, India, Philippines\n• Mentored 20+ engineers to senior positions\n\n📊 Strategic Impact:\n• Increased test coverage from 40% to 70%\n• Reduced defect leakage by 35%\n• Cut testing cycle time by 50%\n• Saved $500K+ through automation",
    projects:
      "Here are Phani's key projects:\n\n1. 🏦 UWM AI Underwriting - RAG/LLM testing (40% faster)\n2. 💳 Deluxe AWS Migration - Cloud transformation ($110K saved)\n3. 🏢 Accenture Testing COE - Built 50+ member team\n4. 📱 Microsoft Windows Phone - Performance testing",
    contact:
      "� Phani's Availability:\n\n✅ Open to new opportunities\n📍 Based in Detroit Metro, Michigan\n🌍 Open to remote work or hybrid roles\n\n📧 Email: dharmapuri.phani@gmail.com\n� LinkedIn: linkedin.com/in/phani-dharmapuri\n\nTypically responds within 24 hours!",
    certifications:
      "📜 Professional Certifications:\n\n• AWS Certified Solutions Architect\n• AWS Certified Developer Associate\n• Certified Scrum Master (CSM)\n• ISTQB Advanced Test Automation Engineer\n• SAFe 5 Agilist"
  };

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Check for greetings
    if (input.match(/\b(hi|hello|hey|greetings)\b/)) {
      return "👋 Hi! I'm Phani's AI assistant. I can help you learn about his experience, skills, projects, and availability. What would you like to know?";
    }

    // Check for goodbye
    if (input.match(/\b(bye|goodbye|thanks|thank you)\b/)) {
      return "You're welcome! Feel free to reach out anytime. Have a great day! 👋";
    }

    // Check for experience/background
    if (input.match(/\b(experience|background|work|career|history)\b/)) {
      return knowledgeBase.experience;
    }

    // Check for skills/technical
    if (
      input.match(/\b(skill|technical|technology|tech|programming|language)\b/)
    ) {
      return knowledgeBase.skills;
    }

    // Check for AI/ML
    if (
      input.match(
        /\b(ai|artificial intelligence|machine learning|ml|llm|rag|chatbot)\b/
      )
    ) {
      return knowledgeBase.ai;
    }

    // Check for cloud/aws/devops
    if (
      input.match(
        /\b(cloud|aws|azure|devops|kubernetes|docker|ci\/cd|jenkins)\b/
      )
    ) {
      return knowledgeBase.cloud;
    }

    // Check for leadership
    if (input.match(/\b(leadership|lead|manage|team|mentor)\b/)) {
      return knowledgeBase.leadership;
    }

    // Check for projects/case studies
    if (input.match(/\b(project|case study|work|portfolio|example)\b/)) {
      return knowledgeBase.projects;
    }

    // Check for contact/availability
    if (input.match(/\b(contact|email|reach|available|hire|availability)\b/)) {
      return knowledgeBase.contact;
    }

    // Check for certifications
    if (input.match(/\b(certification|certified|certificate|credential)\b/)) {
      return knowledgeBase.certifications;
    }

    // Default response
    return "I can help you with:\n• Experience & Background\n• Technical Skills\n• AI/ML Projects\n• Cloud & DevOps\n• Leadership Experience\n• Case Studies\n• Contact Information\n• Certifications\n\nWhat would you like to know?";
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      const initialMessage: Message = {
        text: "👋 Hi! I'm Phani's AI assistant. I can help you learn about his experience, skills, and availability. Type your question below!",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages([initialMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Open chat window if not already open
    if (!isOpen) {
      setIsOpen(true);
    }

    // Add user's message
    const userMessage: Message = {
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Get bot's response after a short delay
    setTimeout(() => {
      const response = getResponse(inputValue);
      const botMessage: Message = {
        text: response,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleOptionClick = (option: QuickOption) => {
    setInputValue(option.query);
    // Trigger send after setting the value
    setTimeout(() => {
      if (!isOpen) {
        setIsOpen(true);
      }
      const userMessage: Message = {
        text: option.query,
        sender: "user",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);

      setTimeout(() => {
        const response = getResponse(option.query);
        const botMessage: Message = {
          text: response,
          sender: "bot",
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 800);
    }, 100);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputBlur = () => {
    // Keep window open when input loses focus
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setInputValue("");
    const initialMessage: Message = {
      text: "👋 Hi! I'm Phani's AI assistant. I can help you learn about his experience, skills, and availability. Type your question below!",
      sender: "bot",
      timestamp: new Date()
    };
    setMessages([initialMessage]);
  };

  return (
    <>
      {/* Inline text input field - reduced width by 40% */}
      <div className="relative w-[60%] mx-auto">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Ask me anything about my portfolio here..."
            className="w-full px-6 py-4 pr-20 border-2 border-white bg-black text-white rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-white placeholder-gray-400 shadow-lg text-base"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-gray-200 text-black rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            aria-label="Send message"
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
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Chat window - fixed position at top-right, below menu */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="fixed top-20 right-8 w-[450px] max-w-[calc(100vw-4rem)] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-slideIn z-50"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Chat with Phani's AI</h3>
              <p className="text-xs text-gray-300">
                Ask about experience, skills & projects
              </p>
            </div>
            <div className="flex gap-2">
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
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                title="Close chat"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick questions section - shows when no messages */}
          {messages.length === 0 && (
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <p className="text-sm text-gray-700 font-semibold mb-3">
                Quick questions:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="text-left px-3 py-2 bg-white hover:bg-gray-200 text-gray-800 rounded-lg transition-all duration-200 text-xs font-medium border border-gray-300 hover:border-gray-400 hover:shadow-sm"
                  >
                    <span className="mr-1">{option.icon}</span>
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          )}

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
                      : "bg-gray-800 text-white shadow-md"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">
                    {msg.text}
                  </p>
                  <p
                    className={`text-xs mt-2 ${
                      msg.sender === "bot" ? "text-gray-400" : "text-gray-300"
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
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 shadow-sm border border-gray-200 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></span>
                    <span
                      className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Text Input inside chat */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                disabled={isTyping}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800 placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-md hover:shadow-lg"
                aria-label="Send message"
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
