import React from 'react';
import { func } from 'prop-types';

function Operations({ selectExpression }) {
  const expresstion = ['+', '−', '×', '÷'];

  return (
    <>
      {expresstion.map(exp => (
        <button
          key={`expresstion_${exp}`}
          type="button"
          onClick={selectExpression}
        >
          {exp}
        </button>
      ))}
    </>
  );
}

Operations.propTypes = {
  selectExpression: func,
};

Operations.defaultProps = {
  selectExpression: e => {
    console.dir(e.target);
  },
};

export default Operations;
