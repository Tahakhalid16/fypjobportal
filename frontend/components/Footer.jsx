import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">JobPortal</h3>
            <p className="text-sm">
              Connecting talented professionals with outstanding opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-right">
            <h4 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/jobs"
                  className="text-sm hover:text-white transition-colors"
                >
                  Find Jobs
                </a>
              </li>
              <li>
                <a
                  href="/post-job"
                  className="text-sm hover:text-white transition-colors"
                >
                  Post a Job
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© {currentYear} JobPortal. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
