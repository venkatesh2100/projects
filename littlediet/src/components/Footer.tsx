

export function Footer() {
  return (
    <div id="footer">
      <div
        className="bg-footerColor bg-cover bg-center"
        style={{
          backgroundImage: `url('/footer_background_03.jpg')`,
        }}
      >
        <div className="mb-12 sm:mb-24">
          <img
            src="/top_grey_wave_home_04.png"
            alt="Top Wave Design"
            className="w-full"
          />
        </div>

        <div className="px-4 sm:px-8 md:px-16 lg:px-32 text-white">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-16">
            <div className="flex flex-col items-center lg:items-start lg:w-1/2">
              <div className="text-4xl mb-6">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-40 sm:w-52"
                />
              </div>
              <div className="flex gap-4 pb-8">
                <div className="h-10 w-10 rounded-full bg-footerSociallink flex items-center justify-center">
                  <a href="/about" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://img.icons8.com/?size=100&id=106163&format=png&color=000000"
                      alt="facebook"
                      className="w-5"
                    />
                  </a>
                </div>
                <div className="h-10 w-10 rounded-full bg-footerSociallink flex items-center justify-center">
                  <a
                    href="https://www.instagram.com/littlediet.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000"
                      alt="instagram"
                      className="w-5"
                    />
                  </a>
                </div>
                <div className="h-10 w-10 rounded-full bg-footerSociallink flex items-center justify-center">
                  <a href="/about" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://img.icons8.com/?size=100&id=37325&format=png&color=000000"
                      alt="youtube"
                      className="w-5"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="lg:w-1/2">
              <h1 className="font-bold mb-4 text-center lg:text-left">
                Contact Details
              </h1>
              <p className="text-center lg:text-left">H no 2-4-438, Ramnagar, Hanakonda</p>
              <p className="text-center lg:text-left">+91 9032221070</p>
              <p className="text-center lg:text-left">littlediet.in@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
