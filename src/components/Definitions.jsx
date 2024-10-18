import React from 'react';
import useStore from '../store';

const Definitions = () => {
  const { definitions } = useStore();

  return (
    <div>
      {definitions.length > 0 ? (
        definitions.map((definition, index) => (
          <div key={index} className="word-details">
            <h3>{definition.word}</h3>
            {definition.phonetics && (
              <p>
                Phonetic: {definition.phonetics[0].text}
              </p>
            )}
            {definition.meanings.length > 0 && (
              <div>
                <h4>{definition.meanings[0].partOfSpeech}</h4>
                <p>{definition.meanings[0].definitions[0].definition}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No definitions found.</p>
      )}
    </div>
  );
};

export default Definitions;
