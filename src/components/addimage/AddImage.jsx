import React, { useState } from 'react'
import { connect } from 'react-redux';
import authActions from '../../actions/authAction';
import errorActions from '../../actions/errorAction';
import galleryActions from '../../actions/galleryAction';

const AddImage = (props) => {
    const { resetError, auth, error, gallery } = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imagePrivate, setImagePrivate] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleUploadImage = (e) => {
        const { uploadImage } = props;
        e.preventDefault();
        console.log({ title, description, imagePrivate, selectedFile });
        const tagValue = imagePrivate ? 'granted' : 'denied';
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('title', title);
        formData.append('description', description)
        formData.append('is_private', tagValue)
        console.log(formData);
        uploadImage(formData)
    }

    return (
        <>
        {
        error.isSet && (
            <div className="alert alert-danger mt-5" role="alert">
                {error.message}
            </div>
        )
        }
        {
        gallery?.uploadImageApiStatus?.status && (
            <div className="alert alert-success mt-5" role="alert">
            Image uploaded successfully!
            </div>
        )
        }
        {
        auth.isLoading && (
            <div className="alert alert-primary mt-5" role="alert">
            Loading... Please Wait!
            </div>
        )
        }
        <div className="row">
            <div className="col-10 col-sm-8 col-md-8 col-lg-6 col-xl-6 mx-auto mt-5">
                <h3 className="text-right mt-5 mb-5">Add new Images to Gallery</h3>
                <form onSubmit={handleUploadImage}>
                <div className="form-group">
                        <label htmlFor="Name">Title : </label>
                        <input type="text" name="title" className="form-control" id="name" aria-describedby="emailHelp" 
                        onChange={(e) => { setTitle(e.target.value); resetError(); } } 
                        required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Descreption : </label>
                        <input type="text" name="description" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        onChange={(e) => { setDescription(e.target.value); resetError(); } } 
                        required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload: </label>
                        <input type="file" className="form-control" id="file" name="image" 
                        onChange={(e) => { setSelectedFile(e.target.files[0]); resetError(); }}
                        />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"
                        onChange={(e) => { setImagePrivate(e.target.checked)}}/>
                        <label className="form-check-label" for="exampleCheck1">Private</label>
                    </div>
                    <button type="submit" disabled={auth.isLoading} className="btn btn-primary btn-lg mr-3">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    const { auth, error, gallery } = state;
    return {
        auth,
        error,
        gallery
    }
}

const mapDispatchToProps = (dispatch) => ({
    signupUser: (email, password, name) => { dispatch(authActions.signupUser(email, password, name)); },
    resetError: () => { dispatch(errorActions.resetError()); },
    toggleForm: () => { dispatch(authActions.toggleLoginForm()); },
    uploadImage: (formData) => { dispatch(galleryActions.uploadImage(formData))}
})

export default connect(mapStateToProps, mapDispatchToProps)(AddImage);

