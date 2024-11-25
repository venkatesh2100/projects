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
                <div className="mx-80 text-white">
                    <div className="flex justify-center">
                        <div className="flex justify-start w-auto pr-40">
                            <div>
                                <div className="text-4xl mb-40">
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
                                    <div className="w-96 mb-40">
                                        *Receive fresh tips and exclusive promotions. No spam – we promise.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div>
                                <div className="flex">
                                    <input
                                        className="outline-none rounded-full px-4 h-11 text-black w-full"
                                        placeholder="Your Email"
                                    />
                                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full ml-2 hover:bg-orange-600">
                                        Subscribe
                                    </button>
                                </div>
                                <div>other things asdfas df asdf asdf asdf asd fasdf</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
