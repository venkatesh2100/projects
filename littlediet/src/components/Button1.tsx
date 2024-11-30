interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <div className="">
      <button

        className="bg-[#ff9419] text-whitefont-medium px-6 py-2 rounded-tr-full rounded-tl-none rounded-bl-full rounded-br-full hover:shadow-lg"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
