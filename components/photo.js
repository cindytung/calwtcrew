import React, { Component, PropTypes } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
    };
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
  }

  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      this.setState({
        mouseOver: true,
      });
    }
  }

  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false,
      });
    }
  }

  render() {
    return (
      <div className="photo">
        <img
          src={this.props.data.image}
          alt={this.props.data.name}
        />
      </div>
    );
  }
}

Photo.propTypes = {
  data: React.PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default Photo;
