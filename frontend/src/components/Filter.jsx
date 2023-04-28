import React, { useState } from 'react';

const Filter = ({ foption, bool, setCheck }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleFilterChange = (trait_type, value, checked) => {
    setCheck((prev) => {
      const prevValues = prev[trait_type] || [];
      const newValues = checked
        ? [...prevValues, value]
        : prevValues.filter((v) => v !== value);

      return {
        ...prev,
        [trait_type]: newValues,
      };
    });
  };

  if (!bool) return null;

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4">
      {Object.keys(foption).map((trait_type) => (
        <div key={trait_type}>
          <h3 onClick={() => toggleExpand(trait_type)}>{trait_type}</h3>
          {expanded[trait_type] && (
            <div>
              {foption[trait_type].map((value) => (
                <div key={value}>
                  <input
                    type="checkbox"
                    id={value}
                    name={value}
                    value={value}
                    onChange={(e) =>
                      handleFilterChange(trait_type, value, e.target.checked)
                    }
                  />
                  <label htmlFor={value}>{value}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
