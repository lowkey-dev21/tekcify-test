import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          {/* Logo & Description */}
          <div className="lg:col-span-3 order-1">
            <Image
              src="/assets/logo.svg"
              alt="Tekcify"
              width={120}
              height={40}
              className="brightness-0 invert mb-6"
            />
            <p className="text-gray-400 text-sm">
              Empowering your digital experience with AI-driven solutions.
              Making technology more accessible, smarter, and user-friendly.
            </p>
          </div>
          {/* Newsletter & Socials */}
          <div className="lg:col-span-4 lg:order-3 order-2">
            <div className="bg-[#111] rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-medium mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-6">
                Get the latest updates about our AI products and exclusive early
                access to new features.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-xl text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="w-full px-4 py-3 bg-[#7c3bee]  hover:bg-primary-500 rounded-xl text-sm font-medium transition-colors">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#111] rounded-lg hover:bg-[#222] transition-colors"
                href="https://x.com/tekcify"
              >
                {/* X (Twitter) */}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="w-5 h-5"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#111] rounded-lg hover:bg-[#222] transition-colors"
                href="https://linkedin.com/company/tekcify"
              >
                {/* LinkedIn */}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="w-5 h-5"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#111] rounded-lg hover:bg-[#222] transition-colors"
                href="https://instagram.com/tekcify"
              >
                {/* Instagram */}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="w-5 h-5"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#111] rounded-lg hover:bg-[#222] transition-colors"
                href="https://youtube.com/@tekcify"
              >
                {/* YouTube */}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="w-5 h-5"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#111] rounded-lg hover:bg-[#222] transition-colors"
                href="https://tiktok.com/@tekcify"
              >
                {/* TikTok */}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="w-5 h-5"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="lg:col-span-5 lg:order-2 order-3">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Products</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      className="text-gray-400 hover:text-white transition-colors"
                      href="/products"
                    >
                      Binx
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-white transition-colors"
                      href="/products"
                    >
                      PDFX
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-white transition-colors"
                      href="/products"
                    >
                      Campux
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      className="text-gray-400 hover:text-white transition-colors"
                      href="/#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-white transition-colors"
                      href="/#"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      className="text-gray-400 hover:text-white transition-colors"
                      href="/404"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-white transition-colors"
                      href="/404"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-white transition-colors"
                      href="/404"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-[#222] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <a
                className="text-sm text-gray-400 hover:text-white transition-colors"
                href="/404"
              >
                Privacy Policy
              </a>
              <a
                className="text-sm text-gray-400 hover:text-white transition-colors"
                href="/404"
              >
                Terms of Service
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 Tekcify. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
