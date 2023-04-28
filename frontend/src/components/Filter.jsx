import React, { useState } from 'react';

const Filter = ({ foption, bool }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleCheckboxChange = (trait_type, value) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = { ...prevSelectedOptions };

      if (!newSelectedOptions[trait_type]) {
        newSelectedOptions[trait_type] = [];
      }

      if (newSelectedOptions[trait_type].includes(value)) {
        newSelectedOptions[trait_type] = newSelectedOptions[trait_type].filter(
          (optionValue) => optionValue !== value
        );
      } else {
        newSelectedOptions[trait_type].push(value);
      }

      return newSelectedOptions;
    });
  };

  if (!bool) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {Object.entries(foption).map(([trait_type, values]) => (
        <div key={trait_type}>
          <h3>{trait_type}</h3>
          {values.map((value) => (
            <div key={value}>
              <input
                type="checkbox"
                value={value}
                onChange={() => handleCheckboxChange(trait_type, value)}
              />
              <label>{value}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filter;
