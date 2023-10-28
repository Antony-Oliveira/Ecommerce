import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import "./ImageGallery.css"

const ImageGallery = ({ images }) => {

    const galleryImages = images.map(image => ({
        original: image, // A URL original da imagem
        thumbnail: image, // Uma versão em miniatura da imagem (pode ser a mesma URL)
        description: '', // Descrição opcional da imagem
    }));

    return (
        <div className="image-gallery-container">
            <Gallery items={galleryImages} showBullets={true} showNav={false} showIndex={false}  showPlayButton={false} autoPlay={false} />
        </div>
    );
};

export default ImageGallery;
