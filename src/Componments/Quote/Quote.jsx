import React from "react";
import "./quote.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const quotes = [
  {
    id: 1,
    quote:
      "You can't cross the sea merely by standing and staring at the water.",
    author: "Rabindranath Tagore",
  },
  {
    id: 2,
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    id: 3,
    quote: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde",
  },
  {
    id: 4,
    quote: "I am not afraid of storms, for I am learning how to sail my ship.",
    author: "Louisa May Alcott",
  },
  {
    id: 5,
    quote:
      "Life is a journey, and if you fall in love with the journey, you will be in love forever.",
    author: "Peter Hagerty",
  },
  {
    id: 6,
    quote: "The true sign of intelligence is not knowledge but imagination.",
    author: "Albert Einstein",
  },
  {
    id: 7,
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    id: 8,
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    id: 9,
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    id: 10,
    quote: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    id: 11,
    quote: "Get busy living or get busy dying",
    author: "Stephen King",
  },
  {
    id: 12,
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up",
    author: "Thomas A. Edison",
  },
];

function Quote() {
  const navigateToTwitter = useNavigate();
  const navigateToWhatapp = useNavigate();
  function handelNavigateTwitter() {
    return navigateToTwitter("/twitter");
  }
  function handelNavigateWhatapp() {
    return navigateToWhatapp("/whatapp");
  }
  const maxIndex = quotes.length - 1;
  const [index, setIndex] = useState(0);
  function goQuote() {
    if (index === maxIndex) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function backQuote() {
    if (index === 0) {
      setIndex(maxIndex);
    } else {
      setIndex(index - 1);
    }
  }
  return (
    <>
      <div className="container">
        <img className="quotationMark" src="https://shorturl.at/clDJ0"></img>{" "}
        <br></br>
        <h3>{quotes[index].quote}</h3> <br></br>
        <h4>- {quotes[index].author}</h4>
        <div className="lastLine">
          <div className="Btn">
            <button type="button" onClick={backQuote}>
              {"<"}
            </button>
            <button type="button" onClick={goQuote}>
              {">"}{" "}
            </button>
          </div>
          <div className="login">
            <h5 className="share">Share at :</h5>
            <button className="twitter" onClick={handelNavigateTwitter}>
              <svg
                color="#1d9bf0"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </button>
            <button className="whatapp" onClick={handelNavigateWhatapp}>
              <svg
                color="#25d366"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="addQuote">
        <h1>Add some quotes</h1>
        <label id="myLabel">Add here:</label>
        <input id="myInput"></input>
      </div>
    </>
  );
}

export default Quote;
