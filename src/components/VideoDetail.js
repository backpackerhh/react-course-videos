import React from "react";

export default class VideoDetail extends React.Component {
  render() {
    const { video } = this.props;

    if (!video) {
      return null;
    }

    return (
      <div>
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            title={video.id.videoId}
          ></iframe>
        </div>

        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}
