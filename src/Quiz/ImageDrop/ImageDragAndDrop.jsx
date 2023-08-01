import React, { useState } from 'react';

const ImageDragAndDrop = () => {
    const [dragging, setDragging] = useState(true);

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        setDragging(true);
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const draggedImage = document.getElementById(data);

        const newImage = document.createElement('img');
        newImage.src = draggedImage.src;
        newImage.alt = draggedImage.alt;
        newImage.draggable = true;
        newImage.id = 'drag-image';
        newImage.style.width = '200px';
        newImage.style.marginTop = '10px';

        e.target.appendChild(newImage);
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div
                id="drop-zone"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                    border: dragging ? '2px dashed #000' : '2px solid #000',
                    padding: '10px',
                    margin: '10px',
                }}
            >
                Drop Image Here
            </div>

            <img
                id="drag-image"
                src="path_to_your_image.jpg"
                alt="Draggable Image"
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{ width: '200px', marginTop: '10px' }}
            />
        </div>
    );
};

export default ImageDragAndDrop;
