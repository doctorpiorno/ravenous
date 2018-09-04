import React from "react";
import './Business.css';

class Business extends React.Component {
  render () {
    return (
    <div className="business">
      <div className="image-container">
        <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
      </div>
      <h2>{this.props.listing.name}</h2>
      <div className="business-information">
        <div className="business-address">
          <p>{this.props.listing.address}</p>
          <p>{this.props.listing.city}</p>
          <p>{this.props.listing.state} {this.props.listing.zipCode}</p>
        </div>
        <div className="business-reviews">
          <h3>{this.props.listing.category}</h3>
          <h3 className="business">{this.props.listing.rating} stars</h3>
          <p>{this.props.listing.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
  }
}

export default Business;
