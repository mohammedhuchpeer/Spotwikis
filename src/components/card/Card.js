import React, { Component } from 'react';
import classes from './Card.css';
import Speech from 'react-speech';


class Card extends Component {

    state = {
        toggleShow: false
    }

    toggleHandler = () => {
        const isVisible = this.state.toggleShow;
        this.setState({ toggleShow: !isVisible });
    }

    render() {
        return (
            <div className={!this.state.toggleShow ? classes.Card : classes.CardBig}>
                <div className={classes.Thumb} style={{ backgroundImage: `url(${this.props.url})` }}>
                </div>
                <div className={classes.speechButtons}>
                    <Speech
                        stop={true}
                        pause={true}
                        resume={true}
                        text={this.props.description}
                        pitch="0.5"
                        rate="0.5"
                        volume="0.1"
                        lang="en-GB"
                        voice="Daniel" />
                </div>
                <article>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.description} </p>
                    <label className={classes.readMoreTrigger} onClick={this.toggleHandler}>{!this.state.toggleShow ? "Read More" : "Show Less"}</label>
                    <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-between' }}>
                        <span>{this.props.contributor}</span>
                    </div>
                </article>
            </div >
        );
    }

}

export default Card;