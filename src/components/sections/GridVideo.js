import React from 'react'

export const GridVideo = ({videos}) => {

    return (
        <div className="video-grid-container">
            {videos.map( video => (
                <video
                    controls
                    width="45%"
                    preload="none"
                    poster=""
                    ><source src={video} type="video/mp4" />
                </video>
            ))}
        </div>
    )
}
