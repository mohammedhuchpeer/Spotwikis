import React from 'react';
import classes from './Slide.css';

const Slide = (props) => {
    console.log(props);
    return (
        <div className={classes.slide} style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 60%'
        }}></div>
    );
}

export default Slide;