import React, { Component } from 'react';
//import classes from './ImageSlider.css';
import classes from "./ImageSlider.css";
//import Slide from './slide/Slide';
//import LeftArrow from './leftarrow/Leftarrow';
//import RightArrow from './rightarrow/RightArrow';

const IDLE_TIME = 3000;
const TRANSITION_TIME = 900;
const STEP_IDLE = 0;
const STEP_CHANGE_FRONT = 1;
const STEP_CHANGE_BACK = 2;

class ImageSlider extends Component {
    state = {
        index: 1,
        step: STEP_IDLE,
        frontImage: this.props.images[0],
        backImage: this.props.images[1],
    };

    componentDidMount() {
        this.startToMove();
    }

    componentDidUpdate(prevProps, prevState) {
        const { step, index } = this.state;

        if (prevState.step === STEP_IDLE && step === STEP_CHANGE_FRONT) {
            this.makeFrontImageChange();
        } else if (prevState.step === STEP_CHANGE_FRONT && step === STEP_CHANGE_BACK) {
            this.makeBackImageToNext();
        } else if (prevState.step === STEP_CHANGE_BACK && step === STEP_IDLE) {
            this.startToMove();
        }
    }

    makeFrontImageChange = () => {
        const { index, backImage } = this.state;
        const { images } = this.props;

        setTimeout(() => {
            this.setState({
                step: STEP_CHANGE_BACK,
                index: (index + 1 >= images.length) ? 0 : index + 1,
                frontImage: backImage,
            });
        }, TRANSITION_TIME);
    }

    makeBackImageToNext = () => {
        const { index } = this.state;
        const { images } = this.props;

        this.setState({
            step: STEP_IDLE,
            backImage: images[index],
        })
    }

    startToMove = () => {
        setTimeout(() => {
            this.setState({
                step: STEP_CHANGE_FRONT,
            });
        }, IDLE_TIME);
    }

    render() {
        const { index, step, frontImage, backImage } = this.state;
        const attachedClasses=[classes.wrapper, classes._move]
        return (
            <div
                className={attachedClasses.join(' ')}
                style={{
                    backgroundImage: `url(${backImage})`
                }}
            >
                <div
                    className={classes.frontImage}
                    style={{
                        backgroundImage: `url(${frontImage})`
                    }}
                />
            </div>
        );
    }
}

export default ImageSlider;