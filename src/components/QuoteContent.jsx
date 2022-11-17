import React from 'react';

const QuoteContent = ({ quote }) => {
  return (
    <div className="pl-[99px] border-l-[8px] border-[#F7DF94]">
      <blockquote className="text-4xl font-medium">"{quote}"</blockquote>
    </div>
  );
};

export default QuoteContent;
