import React from 'react';

import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} key={video.etag}/>
  });

  return(
    <ul className="col-xs-4 list-group text-center">
      {videoItems}
    </ul>
  );
};

export default VideoList;
