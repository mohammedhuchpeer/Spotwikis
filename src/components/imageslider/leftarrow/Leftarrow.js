import React from 'react';
import classes from './LeftArrow.css';
import leftArrow from '../../../assets/leftarrow.png';

const LeftArrow = (props) => {
    const attachedClasses = [classes.backArrow, classes.arrow];
    return (
        <div className={attachedClasses.join(' ')} onClick={props.goToPrevSlide}>
            <img src={leftArrow}/>
        </div>
    )
}

export default LeftArrow;