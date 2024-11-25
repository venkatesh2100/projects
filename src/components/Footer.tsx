export function Footer() {
    return (
      <div>
        <div
          className="bg-footerColor bg-cover bg-center"
          style={{
            backgroundImage: `url('https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/04/footer_background_03.jpg')`,
          }}
        >
          <div className="mb-36">
            <img
              src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/top_grey_wave_home_04.png"
              alt=""
              className="w-full"
            />
          </div>
          <div className="mx-4 sm:mx-80 text-white">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
              <div className="flex flex-col items-center sm:items-start sm:w-auto sm:pr-40 mb-12 sm:mb-0">
                <div className="text-4xl mb-8 sm:mb-40">
                  <h1>Logo</h1>
                </div>
                <div>
                  <div className="flex gap-4 pb-8">
                    <div className="h-10 w-10 rounded-full bg-footerSociallink text-center pt-2 pl-2">
                      <a href="/about">
                        <img
                          src="https://img.icons8.com/?size=100&id=106163&format=png&color=000000"
                          alt="facebook image"
                          width={25}
                        />
                      </a>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-footerSociallink text-center pt-2 pl-2">
                      <a href="/about">
                        <img
                          src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000"
                          alt="instagram image"
                          width={25}
                        />
                      </a>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-footerSociallink text-center pt-2 pl-2">
                      <a href="/about">
                        <img
                          src="https://img.icons8.com/?size=100&id=37325&format=png&color=000000"
                          alt="youtube image"
                          width={25}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="w-96 mb-8 sm:mb-40 text-center sm:text-left">
                    *Receive fresh tips and exclusive promotions. No spam – we promise.
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start">
                <div className="w-full sm:w-auto">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start w-full">
                    <input
                      className="outline-none rounded-full px-4 h-11 text-black w-full sm:w-96 mb-4 sm:mb-0"
                      placeholder="Your Email"
                    />
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full ml-2 hover:bg-orange-600 w-full sm:w-auto">
                      Subscribe
                    </button>
                  </div>
                  <div className="text-center sm:text-left">
                    here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
