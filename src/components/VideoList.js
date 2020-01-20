import React from "react";

import VideoItem from "./VideoItem";

export default class VideoList extends React.Component {
  render() {
    const videos = this.props.videos.map(video => {
      return <VideoItem key={video.videoId} video={video} />;
    });

    return <div className="ui relaxed divided list">{videos}</div>;
  }
}
