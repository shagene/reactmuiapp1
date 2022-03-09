import React from "react";

class ImageCard extends React.Component {
  render() {
    return (
      <div>
        <img
          alt={this.props.image.alt_desrciption}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}
