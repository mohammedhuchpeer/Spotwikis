import React, { Component } from 'react';
import { geolocated } from "react-geolocated";
import Card from '../card/Card';
import classes from './Cards.css';
import axios from 'axios';
import Aux from '../../hoc/Dummy';

class Cards extends Component {
    state = {
        posts: [],
        isLoading: true,
        coords: ""
    }

    componentWillUnmount() {
        console.log("Component unmounted");
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    loadPosts = () => {
        let targetUrl = 'https://spotwikis.com/api/wiki/geolocate/';
        let postData = {
            "latitude": this.props.coords ? this.props.coords.latitude : null,
            "longitude": this.props.coords ? this.props.coords.longitude : null,
        };
        let config = {
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJjYW5DcmVhdGUiOnRydWUsImNhbkRlbGV0ZSI6dHJ1ZSwiY2FuVXBkYXRlIjp0cnVlLCJpYXQiOjE1NzA0NzA1NDQsImlzcyI6IlZlcnQueCIsInN1YiI6Ildpa2kgQVBJIn0.3hxH0SXtO3v-uSEuVzngJERyRczCjf1DDXXMgT1PR3k",
            }
        };
        axios.post(targetUrl, postData, config)
            .then(response => {
                this.setState({ posts: response.data, isLoading: false, coords: postData });
            })
            .catch(error => console.log(error))
    }

    render() {
        const sources = this.state.posts;
        let data = null;
        if (!this.props.isGeolocationAvailable) {
            data = <p>Your Browser does not support Geolocation</p>;
        } else if (!this.props.isGeolocationEnabled) {
            data = <p>Geolocation is not enabled</p>;
        } else if (this.props.coords && this.state.isLoading) {
            data = <div className={classes.Loader}>{this.loadPosts()}</div>;
        } else if (!this.state.isLoading) {
            data =
                <div className={classes.Cards} >
                    {sources.map(source =>
                        <Card
                            key={source._id}
                            name={source.name}
                            url={source.content.imageUrls[0]}
                            description={source.content.descriptions[0].descriptionString}
                            contributor={source.contributor.username}
                        />
                    )}
                </div>
        }
        return (
            <Aux >
                {data}
            </Aux>
        );
    }
}


export default geolocated({
    positionOptions: {
        enableHighAccuracy: true
    },
    userDecisionTimeout: 5000
})(Cards);