import React from 'react';
// import * as CSS from './data.display.css';

type DataDisplayProps = {
  label: React.ReactNode;
  meta?: React.ReactNode;
  value: React.ReactNode;
};

export const DataDisplay = ({ label, meta, value }: DataDisplayProps) => {
  return (
    <div>
      <p>{label}</p>
      {value}

      {/* <!--
      {size === 'medium' ? (
        <h2>
          {value}
        </h2>
      ) : (
        <p>
          {value}
        </p>
      )}
      --> */}
      {meta !== undefined && <p>{meta}</p>}
    </div>
  );
};
