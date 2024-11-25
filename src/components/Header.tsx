const Header = () => {
  return (
    <div className="w-full bg-backgroundColor relative">
      <div className="absolute -top-1">
        <img
          src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/White_wave_background.png"
          alt="Background"
          width={4}
          className="w-full"
        />
      </div>

      <div className="relative z-10 flex justify-between flex-row mx-auto p-5 max-w-6xl">
        <div>
          <div className="text-2xl font-bold">Bambino</div>
        </div>

        <div className="flex flex-row gap-16">
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/about">About</a>
          </div>
          <div>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <a href="/blog">Blog</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
