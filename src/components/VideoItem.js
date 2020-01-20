import React from "react";

import "./VideoItem.css";

export default class VideoItem extends React.Component {
  render() {
    const { thumbnails, description, title } = this.props.video.snippet;

    return (
      <div className="video-item item">
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
