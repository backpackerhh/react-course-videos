import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };

  onSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              id="search"
              onChange={this.onChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
