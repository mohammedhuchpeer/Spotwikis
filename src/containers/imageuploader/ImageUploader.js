import React, { Component } from 'react';
import classes from './ImageUploader.css';

class ImageUploader extends Component {
    state = {
        fileList: []
    }

    previews() {
        return this.state.fileList.map((file, index) => {
            const removeItem = () => {
                this.removeItem(index);
            }
            const uploadFile = () => {
                this.uploadFile(file).then(() => {
                    this.removeFile(file);
                });
            }
            return (
                <FilePreview
                    key={index}
                    data={file}
                    onRemove={removeItem}
                    onUpload={uploadFile}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <input type='hidden' name="name" />
                <div>
                    <label>
                        <span>Image</span>
                        <div className={classes.fileDrag}
                            onDragOver={this.handleDragOver}
                            onDragLeave={this.handleDragOver}
                            onDrop={this.handleFileSelect}>
                            <div className={classes.inputWrapper}>
                                <input type='file'
                                    tabIndex='-1'
                                    ref={x => this.input = x}
                                    className={classes.input}
                                    name="name"
                                    multiple={5}
                                    onChange={this.handleFileSelect} />
                                <div className={classes.inputCover}>
                                    <button className={classes.button}
                                        type='button'
                                        onClick={this.selectFile}>
                                        Choose Files</button>
                                    <span className={classes.fileName}>fileNames</span>
                                    "extTails"
                                </div>
                            </div>
                            <span className={classes.helpText}>or drop files here</span></div>
                    </label>
                    <button className={classes.button}
                        type='button'
                        onClick={this.uploadFiles}>
                        Upload All
            </button>
                    <div className={classes.previews}>{this.previews()}</div>
                </div>
            </div>
        );
    }
}

export default ImageUploader;