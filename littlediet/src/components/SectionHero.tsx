import { handleOrderClick } from "../whatsapp/redirectWhatsapp";
import { EffectsCard } from "./EffectsCard";

export function SectionHero() {
  return (
    <div className="relative h-screen bg-backgroundColor bg-center bg-no-repeat">
      {/* Background Image */}
      <img
        src="/littlediet_baby_homepage_resize.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Main Content */}
      <div className="flex h-full w-full pt-20 sm:items-center justify-start relative z-10">
        <div className="text-center text-white lg:pl-16 pt-200 lg:text-left lg:col-span-2">
          <div className="text-start sm:ml-6 sm:mt-6 text-3xl font-paytone sm:text-5xl lg:text-7xl max-w-2xl">
            Freshly prepared UGGU for Little Ones
          </div>

          {/* Effects Card */}
          <div className="hidden sm:block mt-6">
            <EffectsCard
              imgUrl="/leafimg.png"
              title="Great ingredients"
              titleColor="text-green-600"
              description="We only use organic ingredients – no nasties!"
              descriptionWidth="max-w-xs"
            />
          </div>

          {/* Button */}
          <div className="lg:pl-6 lg:pt-6 pl-2 pr-64">
            <Button text="Order now" onClick={handleOrderClick} />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute inset-x-0 bottom-0">
        <img
          src="/bottom_grey_wave_home_04.png"
          alt="Bottom Grey Wave"
          className="w-full h-1 sm:h-5"
        />
      </div>
    </div>
  );
}

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <div className="mt-10">
      <button
        className="bg-[#FF7119] text-white font-medium px-6 py-2 sm:px-10 sm:py-4 rounded-tr-full rounded-tl-none rounded-bl-full rounded-br-full hover:shadow-lg"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
