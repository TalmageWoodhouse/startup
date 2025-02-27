import React from "react";
import "./about.css";

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState("");
  const [quote, setQuote] = React.useState("Loading...");
  const [quoteAuthor, setQuoteAuthor] = React.useState("uknown");

  React.useEffect(() => {
    setImageUrl("numbers.jpg");
    setQuote("You miss 100% of the Shots you don't take");
    setQuoteAuthor("Micheal Jordan");
  }, []);

  return (
    <main>
      <div className="pic-pitch-container">
        <p className="pitch">
          3072 is played by using the arrow keys to slide the numbers in
          thedirection of your choice. When an arrow it pressed the numbers
          slide as far to that direction as possible. Each time you slide a
          number a new number consisting of 3 or 6 will appear. If 2 of the same
          numbers slide into each other they will combine. The object of the
          game is to get the highest score possible and the game is over when
          the board is full and it is not possible to slide anymore.
        </p>
        <img src={imageUrl} alt="image" />
        <p className="pitch">
          Do you think you could get your highest number to 3072?
        </p>

        <div id="quote-box">
          <p className="quote">{quote}</p>
          <p className="author">{quoteAuthor}</p>
        </div>
      </div>
    </main>
  );
}
