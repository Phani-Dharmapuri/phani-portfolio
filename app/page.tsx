import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          {/* Professional Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Image
                src="/profile.jpg"
                alt="Phani Kumar - Professional Photo"
                width={256}
                height={256}
                className="relative rounded-full border-4 border-blue-600/50 shadow-2xl object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Hello! I'm Phani
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300">
            AI Engineering Leader, Quality Engineering
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            18 years of experience driving software quality excellence through
            test automation strategy, technical leadership, and large-scale
            digital transformation for Fortune 500 companies.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Learn More About Me
            </Link>
            <Link
              href="/contact"
              className="border border-blue-600 hover:bg-blue-600/10 text-blue-400 px-8 py-3 rounded-lg transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">AI & Automation</h3>
              <p className="text-gray-400">
                Evaluated FinTech chatbots using RAG, implemented LLM testing
                pipelines, and engineered comprehensive automation frameworks.
              </p>
            </div>
            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-400">
                AWS Certified with extensive cloud migration experience. Led
                enterprise-level on-prem to AWS Cloud migrations.
              </p>
            </div>
            <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Leadership</h3>
              <p className="text-gray-400">
                Built and led high-performing global teams across USA,
                Australia, South Africa, Malaysia, and India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">18+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">70%</div>
              <div className="text-gray-400">Test Coverage Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">35%</div>
              <div className="text-gray-400">Defect Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">$110K</div>
              <div className="text-gray-400">Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-blue-900/20 to-transparent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your AI Quality Engineering Strategy?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help drive quality excellence and automation
            innovation in your organization.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
