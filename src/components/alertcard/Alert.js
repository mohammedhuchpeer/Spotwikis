import React, { Component } from 'react';
import swal from 'sweetalert';
import classes from './Button.css';

class Alert extends Component {

    handleClick = function () {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'info',
            allowOutsideClick: false,
            closeOnEsc: false,
            allowEnterKey: false,
            buttons:true,
        }).then((confirm) => {
            if (confirm) {
                swal({
                    title: 'Please Wait..!',
                    text: 'It will take few seconds..',
                    allowOutsideClick: true,
                    closeOnEsc: true,
                    allowEnterKey: true,
                    buttons:false,
                    onOpen: () => {
                        swal.showLoading()
                    }
                })
                setTimeout(() => swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                }), 2000)
            }
        });
    }

    render() {
        return (
            <div className={classes.example}>
                <button onClick={this.handleClick}>
                    SUBMIT
                </button>
            </div>
        );
    }
}

export default Alert;