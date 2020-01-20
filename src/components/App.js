import React from "react";

import youtube from "../api/youtube";
import SearchBar from "./SearchBar";

export default class App extends React.Component {
  state = {
    videos: []
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

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.videos.length} videos
      </div>
    );
  }
}
