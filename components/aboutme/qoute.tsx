import { useEffect, useState } from "react";

function RandomQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://programming-quotesapi.vercel.app/api/random");
      const data = await response.json();
      const quoteText = `${data.quote} - ${data.author}`;

      // Check if the quote has more than 10 words, and set a default if it does
      const wordCount = quoteText.split(" ").length;
      if (wordCount > 25) {
        setQuote("The only way to learn to code is to code. - Linus Torvalds");
      } else {
        setQuote(quoteText);
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("The only way to learn to code is to code. - Linus Torvalds");
    }
  };

  return (
    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
      {quote}
    </p>
  );
}

export default RandomQuote;
