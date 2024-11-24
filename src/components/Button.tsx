export function Button({text}: {text: string}){
    return <div>
        <button className="bg-[#FF7119] text-white font-medium px-11 py-4 rounded-tr-full rounded-tl-none rounded-bl-full rounded-br-full hover:shadow-lg">
            {text}
        </button>
    </div>
}