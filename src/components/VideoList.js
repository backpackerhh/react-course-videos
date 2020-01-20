import React from "react";

export default class VideoList extends React.Component {
  render() {
    const videos = this.props.videos.map(video => {
      return <div>VideoItem</div>;
    });

    return <div className="video-list">{videos}</div>;
  }
}
