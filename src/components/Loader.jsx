import React from 'react';
import ClockLoader from 'react-spinners/ClockLoader';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <ClockLoader />
      <p>Please wait while fetching data</p>
    </div>
  );
};

export default Loader;
