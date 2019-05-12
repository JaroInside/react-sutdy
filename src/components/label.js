import React from 'react';
import { oneOfType, arrayOf, node, element, string } from 'prop-types';

function Label({ label, children }) {
  return (
    <div>
      <span className="label">{label}</span>
      {children}
    </div>
  );
}

Label.propTypes = {
  label: string,
  children: oneOfType([arrayOf(node), node, arrayOf(element), element]),
};

Label.defaultProps = {
  label: '',
  children: <div />,
};

export default Label;
