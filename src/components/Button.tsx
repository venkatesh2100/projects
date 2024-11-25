interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <div className="mt-10">
      <button
        className="bg-[#FF7119] text-white font-medium px-11 py-4 rounded-tr-full rounded-tl-none rounded-bl-full rounded-br-full hover:shadow-lg"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
