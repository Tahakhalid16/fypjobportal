import Link from "next/link";
import { Search, Briefcase, TrendingUp, Users, Building2, ChevronRight } from "lucide-react";

// Animated background shapes component
const BackgroundShapes = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <circle cx="0" cy="0" r="30" fill="url(#grad1)" className="animate-float">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 10 10; 0 0"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="100" cy="100" r="20" fill="url(#grad1)" className="animate-float-delayed">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; -10 -10; 0 0"
          dur="8s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

// Stats component
const StatCard = ({ icon: Icon, number, label }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="p-3 bg-blue-100 rounded-full mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div className="text-3xl font-bold text-gray-800 mb-2">{number}</div>
    <div className="text-gray-600 text-center">{label}</div>
  </div>
);

// Feature card component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function Home() {
  const stats = [
    { icon: Building2, number: "2,000+", label: "Companies" },
    { icon: Briefcase, number: "10,000+", label: "Active Jobs" },
    { icon: Users, number: "50,000+", label: "Job Seekers" },
    { icon: TrendingUp, number: "89%", label: "Success Rate" },
  ];

  const features = [
    {
      icon: Search,
      title: "Smart Job Matching",
      description: "Our AI-powered platform matches you with jobs that perfectly align with your skills and experience.",
    },
    {
      icon: Briefcase,
      title: "Remote Opportunities",
      description: "Access thousands of remote positions from companies worldwide, work from anywhere.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Get personalized career guidance and access to learning resources to accelerate your growth.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 min-h-[90vh] flex items-center overflow-hidden">
        <BackgroundShapes />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 ml-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Discover Your Next
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Career Opportunity
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Connect with top companies, find remote opportunities, and take your career to new heights with our AI-powered job platform.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/jobs"
                  className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center group"
                >
                  Find Jobs
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors duration-300"
                >
                  Sign Up Free
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Hero Illustration */}
              <svg className="w-full" viewBox="0 0 400 300">
                <defs>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: '#E2E8F0', stopOpacity: 0.9 }} />
                  </linearGradient>
                </defs>
                <rect x="50" y="50" width="300" height="200" rx="20" fill="url(#grad2)" />
                <circle cx="200" cy="150" r="80" fill="#3B82F6" opacity="0.1" />
                <rect x="100" y="100" width="200" height="20" rx="10" fill="#3B82F6" opacity="0.2" />
                <rect x="100" y="140" width="160" height="20" rx="10" fill="#3B82F6" opacity="0.15" />
                <rect x="100" y="180" width="180" height="20" rx="10" fill="#3B82F6" opacity="0.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Platform</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're more than just a job board. Our platform provides everything you need to find and land your dream job.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who've found their dream jobs through our platform.
          </p>
          <Link
            href="/signup"
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center group"
          >
            Get Started
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}