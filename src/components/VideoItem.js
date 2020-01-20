import React from "react";

export default class VideoItem extends React.Component {
  render() {
    const { snippet } = this.props.video;

    return (
      <div>
        <img src={snippet.thumbnails.medium.url} alt={snippet.description} />
        {snippet.title}
      </div>
    );
  }
}
