import React from 'react';

// https://codepen.io/jo-asakura/pen/nhutb?editors=1100
const Toggle = ({ checked, onChange }) => (
  <div className="button-switch">
    <input
      className="switch"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="switch-color" />
  </div>
);

export default Toggle;
