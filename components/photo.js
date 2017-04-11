import React, { PropTypes } from 'react';

const Photo = (props) => (
// constructor(props) {
//   super(props);
//   this.state = {
//     mouseOver: false
//   };
//   this._mouseEnter = this._mouseEnter.bind(this);
//   this._mouseLeave = this._mouseLeave.bind(this);
// }
// _mouseEnter(e) {
// 	e.preventDefault();
// 	if (this.state.mouseOver === false) {
// 		this.setState({
// 			mouseOver: true
// 		})
// 	}
// }
//
// _mouseLeave(e) {
// 	e.preventDefault();
// 	if (this.state.mouseOver === true) {
// 		this.setState({
// 			mouseOver: false
// 		})
// 	}
// }
  <div className="photo">
    <img
      // onMouseEnter={this._mouseEnter}
			// onMouseLeave={this._mouseLeave}
      src={props.data.image}
      alt={props.data.name}
    />
  </div>
);

Photo.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Photo;
