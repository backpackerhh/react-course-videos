import React from "react";

import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

export default class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onSearchSubmit = async term => {
    const SEARCH_VIDEOS_ENDPOINT = "/search";

    const response = await youtube.get(SEARCH_VIDEOS_ENDPOINT, {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}
