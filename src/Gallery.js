
import React from 'react';

const Gallery = ({ data }) => {
  return (
    <div className="gallery">
      {data.map(photo => (
        <div key={photo.id} className="gallery-item">
          <img
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt={photo.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
