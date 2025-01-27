"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-28 sm:mt-0 ">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* About Me */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--hover-color)]">About Me</h3>
            <p className="text-sm text-gray-300">
              I am a passionate web developer with a focus on creating modern, responsive websites. My goal is to build user-friendly, high-performance web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--hover-color)]">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#home" className="hover:text-[var(--hover-color)] transition duration-300">Home</Link></li>
              <li><Link href="#about" className="hover:text-[var(--hover-color)] transition duration-300">About</Link></li>
              <li><Link href="#services" className="hover:text-[var(--hover-color)] transition duration-300">Services</Link></li>
              <li><Link href="#contact" className="hover:text-[var(--hover-color)] transition duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--hover-color)]">Contact</h3>
            <ul>
              <li className="text-sm text-gray-300">Email: <Link href="mailto:contact@example.com" className="text-gray-400 hover:text-[var(--hover-color)]">contact@example.com</Link></li>
              <li className="text-sm text-gray-300">Phone: <Link href="tel:+1234567890" className="text-gray-400 hover:text-[var(--hover-color)]">+1 234 567 890</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--hover-color)]">Follow Me</h3>
            <div className="flex space-x-6">
              <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-[var(--hover-color)] transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </Link>
              <Link href="https://github.com" target="_blank" className="text-gray-400 hover:text-[var(--hover-color)] transition duration-300">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-[var(--hover-color)] transition duration-300">
                <FontAwesomeIcon icon={faTwitter} size="xl"  />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
