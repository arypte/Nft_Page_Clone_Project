import React, { useEffect, useState } from 'react';

const Filter = ({ foption, check, bool }) => {
  const [checkedOptions, setCheckedOptions] = useState({});

  let parsedFoption;

  const setting = () => {
    if (!bool) return;
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
    console.log(foption, bool);
  }, [bool]);

  if (bool) {
    return (
      <div>isLoading....<div>LOADINGEND</div></div>;
    );
  } else {
    return <div>isLoading....</div>;
  }
};

export default Filter;
