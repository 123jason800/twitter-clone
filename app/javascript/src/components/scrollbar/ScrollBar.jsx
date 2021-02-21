import React from 'react';
import './scrollbar.scss';

const ScrollBar = props => {
    return (
    <div className="scrollbar col-md-9">
        {props.children}
    </div>
    );
}

export default ScrollBar;