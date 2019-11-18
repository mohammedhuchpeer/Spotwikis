import React from 'react';
import classes from './RightArrow.css';
import rightArrow from '../../../assets/rightarrow.png';
const RightArrow = (props) => {
    const attachedClasses = [classes.nextArrow, classes.arrow];
    return (
        <div className={attachedClasses.join(' ')} onClick={props.goToNextSlide}>
            <img src={rightArrow}/>
        </div>
    );
}

export default RightArrow;