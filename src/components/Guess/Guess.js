import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const result = checkGuess(word, answer);

  const getCharacterStatus = (character, index) => {
    return result[index].status;
  };

  if (!word) return null;

  return (
    <p className="guess">
      {range(5).map((index) => {
        const character = word[index];

        const status = getCharacterStatus(character, index);
        return (
          <span key={character + index} className={`cell ${status}`}>
            {character}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
