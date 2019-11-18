import React, { Component } from 'react';
import classes from './CreateData.css';
import ReactFormLabel from '../../components/reactlabel/ReactLabel';
import { geolocated } from 'react-geolocated';
import swal from 'sweetalert';
import axios from 'axios';

class CreateData extends Component {
    state = {
        name: '',
        notes: '',
        description: '',
        images: [],
        base64: null,
    }

    handleSubmit = (event) => {
        let url = "https://spotwikis.com/api/wiki/uploadimage";
        let config = {
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJjYW5DcmVhdGUiOnRydWUsImNhbkRlbGV0ZSI6dHJ1ZSwiY2FuVXBkYXRlIjp0cnVlLCJpYXQiOjE1NzA0NzA1NDQsImlzcyI6IlZlcnQueCIsInN1YiI6Ildpa2kgQVBJIn0.3hxH0SXtO3v-uSEuVzngJERyRczCjf1DDXXMgT1PR3k",
            }
        };
        const data = {
            base64encodedImage: this.state.base64
        };
        const updatedData = JSON.stringify(data);
        console.log('imagedata', data);
        swal({
            title: 'Are you sure?',
            text: "Once submitted cannot be changed",
            icon: 'info',
            allowOutsideClick: false,
            closeOnEsc: false,
            allowEnterKey: false,
            buttons: true,
        }).then((confirm) => {
            if (confirm) {
                swal({
                    title: 'Please Wait..!',
                    text: 'It might take few seconds..',
                    allowOutsideClick: true,
                    closeOnEsc: true,
                    allowEnterKey: true,
                    buttons: false,
                    onOpen: () => {
                        swal.showLoading()
                    }
                });
                axios.post(url, updatedData, config)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => swal({
                        icon: "warning",
                        title: "Error while uploading image",
                        text: `${error}`
                    }))
            }
        });
        event.preventDefault();
        this.setState({ name: '' });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleFileSelect = (event) => {
        const files = event.target.files;
        const images = Object.keys(files).map(file => files[file]);
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onloadend = () => {
            let base64data = reader.result;
            let array = base64data.split(',');
            this.setState({ images, base64: array });
        }
    }

    render() {
        const photos = [...this.state.images];
        return (
            <div className={classes.container}>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                    <fieldset className={classes.formGroup}>
                        <ReactFormLabel htmlFor='placeName' title='Name of the Place:' />
                        <input id='formName' className={classes.formInput} name='name' type='text' required onChange={this.handleChange} />
                    </fieldset>
                    <fieldset className={classes.formGroup}>
                        <ReactFormLabel htmlFor='notes' title='Notes:' />
                        <input id='formName' className={classes.formInput} name='notes' type='text' required onChange={this.handleChange} />
                    </fieldset>
                    <fieldset className={classes.formGroup}>
                        <ReactFormLabel htmlFor='formMessage' title='description:' />
                        <textarea id='formMessage' className={classes.formTextarea} name='description' required onChange={this.handleChange}></textarea>
                    </fieldset>
                    <div className={classes.FileUpload}>
                        <input
                            id="f02"
                            type="file"
                            name="image"
                            multiple style={{ display: 'none' }}
                            placeholder="Add photos"
                            onChange={this.handleFileSelect}
                        />
                        <label htmlFor="f02" className={classes.Label}>Add photos</label>
                        <label style={{ marginLeft: '25px' }}>{photos.map(photo =>
                            <ul key={photo.name}><li>{photo.name}</li></ul>
                        )}</label>
                    </div>
                    <div className={classes.formGroup}>
                        <input id='formButton' className={classes.Button} type='submit' placeholder='Send message' />
                    </div>
                </form>
            </div>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true
    },
    userDecisionTimeout: 5000
})(CreateData);