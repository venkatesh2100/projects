export function Footer() {
  return (
    <div>
      <div
        className="bg-footerColor bg-cover bg-center"
        style={{
          backgroundImage: `url('/footer_background_03.jpg')`,
        }}
      >
        <div className="mb-24">
          <img
            src="/top_grey_wave_home_04.png"
            alt=""
            className="w-full"
          />
        </div>

        {/* Main Content */}
        <div className="mx-4 sm:mx-20 lg:mx-40 text-white">
          <div className="flex flex-col lg:flex-row justify-between gap-12">

            {/* Logo and Social Links */}
            <div className="flex flex-col items-center lg:items-start lg:w-1/3">
              <div className="text-4xl mb-8">
                <img src="/public/logo.png" width={200} className="mb-8"></img>
              </div>
              <div className="flex gap-4 pb-8">
                <div className="h-10 w-10 rounded-full bg-footerSociallink flex items-center justify-center">
                  <a href="/about">
                    <img
                      src="https://img.icons8.com/?size=100&id=106163&format=png&color=000000"
                      alt="facebook"
                      width={20}
                    />
                  </a>
                </div>
                <div className="h-10 w-10 rounded-full bg-footerSociallink flex items-center justify-center">
                  <a href="https://www.instagram.com/littlediet.in">
                    <img
                      src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000"
                      alt="instagram"
                      width={20}
                    />
                  </a>
                </div>
                <div className="h-10 w-10 rounded-full bg-footerSociallink flex items-center justify-center">
                  <a href="/about">
                    <img
                      src="https://img.icons8.com/?size=100&id=37325&format=png&color=000000"
                      alt="youtube"
                      width={20}
                    />
                  </a>
                </div>
              </div>
              {/* <p className="w-full text-center lg:text-left text-sm lg:w-72">
                *Receive fresh tips and exclusive promotions. No spam – we
                promise.
              </p> */}
            </div>

            {/* Subscription Section */}
            <div className="flex flex-col items-center lg:items-start lg:w-1/3">
              <div className="flex w-full relative">
                {/* <input
                  className="outline-none rounded-full px-4 h-11 text-black w-full lg:w-auto"
                  placeholder="Your Email"
                /> */}
                {/* <button className="absolute right-0 bg-orange-500 text-white px-6 py-2 rounded-full h-11 hover:bg-orange-600">
                  Subscribe
                </button> */}
              </div>
            </div>

            {/* Quick Links and Contact */}
            <div className="flex flex-col lg:flex-row gap-8 lg:w-1/3">
              {/* <div>
              H no 2-4-438, Ramnagar, Hanamkonda, Telangana, 506001
                <h1 className="font-bold mb-4">Quick Links</h1>
                <p>Our Story</p>
                <p>Meal Selection</p>
                <p>Blog</p>
              </div> */}
              <div>
                <h1 className="font-bold mb-4">Contact Details</h1>
                <p>H no 2-4-438, Ramnagar,Hanakonda </p>
                <p>+91 9032221070</p>
                <p>littlediet.in@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
