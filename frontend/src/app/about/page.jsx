import React from "react";

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  const features = [
    {
      title: "Extensive Job Listings",
      description:
        "Access thousands of curated job postings across various industries, updated daily to ensure you never miss an opportunity.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Our intuitive platform makes job searching efficient and enjoyable, with smart features designed around your needs.",
    },
    {
      title: "Advanced Search Features",
      description:
        "Utilize powerful filters and AI-driven recommendations to find positions that perfectly match your skills and preferences.",
    },
    {
      title: "Seamless Applications",
      description:
        "Upload your CV once and apply to multiple positions with a single click, streamlining your job search process.",
    },
    {
      title: "Market Insights",
      description:
        "Stay informed with real-time updates on job market trends, salary insights, and industry developments.",
    },
    {
      title: "Career Resources",
      description:
        "Access our comprehensive library of career development resources, interview tips, and professional growth guides.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 h-[400px]">
        <div className="h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Connecting Talent with Opportunity
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl">
            Your journey to career success begins here
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We're on a mission to revolutionize the job search experience.
                By combining cutting-edge technology with human insight, we
                create meaningful connections between talented individuals and
                forward-thinking companies. Our platform empowers job seekers to
                build fulfilling careers while helping organizations find their
                perfect match.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where career advancement is accessible to
                everyone. A world where geographic boundaries don't limit
                opportunity, where skills and potential take precedence, and
                where every professional can find their ideal role. We're
                building the bridge that connects ambition with achievement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're a job seeker looking to advance your career or an
            employer searching for exceptional talent, we're here to help you
            succeed. Join our growing community today and discover the
            possibilities that await.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Find Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
