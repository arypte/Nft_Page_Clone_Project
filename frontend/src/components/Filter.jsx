import React, { useEffect, useState } from 'react';

const Filter = ({ foption, check, bool }) => {
  const [checkedOptions, setCheckedOptions] = useState({});

  let parsedFoption;

  const setting = () => {
    try {
      parsedFoption =
        typeof foption === 'string' ? JSON.parse(foption) : foption;
    } catch (error) {
      console.error('Error parsing foption:', error);
      parsedFoption = [];
    }
  };

  useEffect(() => {
    setting();
  }, [bool]);

  if (bool) {
    return (
      <div className="filter">
        {foption.map((option) => (
          <div key={option.trait_type}>
            <h3>{option.trait_type}</h3>
            {option.values.map((value) => (
              <label key={value}>
                <input type="checkbox" />
                {value}
              </label>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return <div>isLoading....</div>;
  }
};

export default Filter;
