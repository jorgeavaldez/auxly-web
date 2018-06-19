import React from 'react';
import './Pretty.css';

export const Button = (props) => ( <span {...props} className="Button">{props.children}</span> );
