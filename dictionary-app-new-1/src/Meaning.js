import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h2>{props.meaning.partOfSpeech}</h2>
            <p>{definition.definition}</p>
            <em>{definition.examples}</em>
          </div>
        );
      })}
    </div>
  );
}
