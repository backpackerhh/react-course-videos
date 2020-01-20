import React from "react";

import "./VideoItem.css";

export default class VideoItem extends React.Component {
  onVideoSelect = () => {
    this.props.onVideoSelect(this.props.video);
  };

  render() {
    const { thumbnails, description, title } = this.props.video.snippet;

    return (
      <div className="video-item item" onClick={this.onVideoSelect}>
        <img
          src={thumbnails.medium.url}
          alt={description}
          className="ui image"
        />
        <div className="content">
          <div className="header">{title}</div>
        </div>
      </div>
    );
  }
}
