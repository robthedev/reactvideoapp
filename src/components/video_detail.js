import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) {
        return  <div>Loading...</div>;
        
    }

    const videoId = video.id.videoId;
    const yt_url = `http://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div>
                <iframe width="560" height="315" className="embed-responsive-item" src={yt_url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;