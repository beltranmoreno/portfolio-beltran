// app/components/Box.js
import React from 'react';

const Box = ({ children, colSpan = 1, rowSpan = 1 }) => {
    const colSpanClass = colSpan ? `col-span-${colSpan}` : '';
    const rowSpanClass = rowSpan ? `row-span-${rowSpan}` : '';
  
    return (
      <div
        className={`${colSpanClass} ${rowSpanClass} bg-gray-900 p-4 flex items-center justify-center text-white rounded-lg`}
      >
        {children}
      </div>
    );
  };
  
  export default Box;