import React, { Component } from 'react';

class FilePreview extends Component {
    state = {}
    render() {
        return (
            <div className={classes}>
                {uploading}
                {loading}
                {preview}
                <div className={styles.fileNameStretch}>{this.props.data.name}</div>
                <button className={styles.button}
                    onClick={this.props.onRemove}>
                    remove
        </button>
                <button className={styles.button}
                    onClick={this.props.onUpload}>
                    upload
        </button>
            </div>
        );
    }
}

export default FilePreview;