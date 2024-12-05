


export function SectionHero() {
  return (
    <div
      className="bg-backgroundColor bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage: `url('https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/04/hero_home_03.jpg')`,
      }}
    >
      {/* Main Content */}
      <div className="flex w-full h-screen items-center justify-center">
        hi
      </div>

      {/* Bottom Grey Wave */}
      <div className="absolute bottom-0 w-full">
        <img
          src="/bottom_grey_wave_home_04.png"
          alt="Bottom Grey Wave"
          className="w-full"
        />
      </div>
    </div>
  );
}
