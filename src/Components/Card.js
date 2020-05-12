import React, { Component } from "react";

import "../App.css";

class Card extends Component {
  state = {};
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img
          className="imgClass"
          src={profile.avatar_url}
          alt="can't display"
        />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
