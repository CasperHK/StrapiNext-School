import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Academic Programs', href: '#programs' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'News & Events', href: '#news' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'Student Portal', href: '/portal' },
    { name: 'Parent Resources', href: '/parents' },
    { name: 'Library', href: '/library' },
    { name: 'Campus Map', href: '/map' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Careers', href: '/careers' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Excellence Academy</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering tomorrow's leaders through innovative education, compassionate community, and unwavering commitment to excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Excellence Avenue</p>
                  <p>Education District</p>
                  <p>Academic City, AC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors duration-200">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:info@excellenceacademy.edu" className="text-gray-300 hover:text-white transition-colors duration-200">
                  info@excellenceacademy.edu
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Excellence Academy. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}