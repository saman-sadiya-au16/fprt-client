import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import galleryActions from '../../actions/galleryAction';
import './privateGallery.css';

const PrivateGallery = (props) => {
    const { getAllUserImages, gallery, deleteImage } = props;
    const [currentImage, setCurrentImage] = useState({
        uploadImageUrl: '',
        title: '',
        description: '',
        image_by: '',
        id: '',
    });

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getAllUserImages();
    }, []);

    useEffect(() => {
        if(gallery?.getAllUserImagesApiStatus?.allImages?.length > 0 && !currentImage.uploadImageUrl) {
            setCurrentImage(gallery?.getAllUserImagesApiStatus?.allImages[0]);
        }
        if(gallery?.getAllUserImagesApiStatus?.allImages?.length === 0 && currentImage.uploadImageUrl) {
            setCurrentImage({
                uploadImageUrl: '',
                title: '',
                description: '',
                image_by: '',
                id: '',
            });
        }
    }, [gallery, currentImage])

    const renderModal = () => {
        return (
            <div style={{ position: 'absolute', top: '0', width: '100vh', height: '100vh', left: 0 }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Image Modal</h5>
                    <button type="button" className="close" aria-label="Close" onClick={() => setShowModal(false)}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div style = {{width: '100%', height: '100%'}}>
                <img style = {{width: '100%', height: '100%'}} src={currentImage?.uploadImageUrl} alt="images" />
                <div className="pl-3" style={{ background: 'black', color: 'white', textTransform: 'capitalize'}}>
                    <p>{currentImage?.title ?? ''}</p>
                    <p>{currentImage?.description ?? ''}</p>
                    <p>{currentImage?.image_by ?? ''}</p>
                </div>
                </div>
                </div>
            </div>
        </div>
        );
    }
    
    return (
        <div>
            <h1> All Images</h1>
            {
                gallery?.getAllUserImagesApiStatus?.isLoading && (
                    <div className="alert alert-primary mt-5" role="alert">
                    Loading... Please Wait!
                    </div>
                )
            }
            {
                currentImage?.uploadImageUrl && (
                <>
                    <button className="btn btn-danger my-3" onClick={() => deleteImage(currentImage.id)}>Delete</button>
                    <img alt="images" className="mainImage" src={currentImage?.uploadImageUrl} onClick={() => setShowModal(true)} />
                    <div className="pl-3" style={{ background: 'black', color: 'white', textTransform: 'capitalize'}}>
                        <p>{currentImage?.title ?? ''}</p>
                        <p>{currentImage?.description ?? ''}</p>
                        <p>{currentImage?.image_by ?? ''}</p>
                    </div>
                </>
                )
            }
            {
                gallery?.getAllUserImagesApiStatus?.allImages?.length > 0 ? (
                    <div style={{ overflowX: 'scroll', width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', 
                    background: 'black' }}> 
                    {
                        gallery?.getAllUserImagesApiStatus?.allImages.map(image => {
                            return (
                            <img alt="images" key={image.id} src={image.uploadImageUrl} style={{ width: '100px', height: '100px', margin: '9px'}}
                            onClick={() => setCurrentImage(image)}
                            />
                            )
                        })
                    }
                    </div>
                )
                : (
                    <p>No Image Available</p>
                )
            }
            {
                showModal && renderModal()
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    const { auth, error, gallery } = state;
    return {
        auth,
        error,
        gallery
    }
    };

const mapDispatchToProps = (dispatch) => ({
    getAllUserImages: () => { dispatch(galleryActions.getAllUserImages()); },
    deleteImage: (imageId) => { dispatch(galleryActions.deleteImage(imageId))}
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateGallery);
