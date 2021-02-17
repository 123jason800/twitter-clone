import React from 'react';


const ScrollBar = props => {
    return (
    <div className="scrollbar mb-5 col-md-9">
        {props.children}
    </div>
    );
}

export default ScrollBar;