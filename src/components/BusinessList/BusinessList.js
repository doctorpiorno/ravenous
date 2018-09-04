import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component {
    render() {
      return (
        <div className="BusinessList">
          {
            this.props.input.map(item => {
              return <Business listing={item} key={item.id} />
            })

          }
        </div>
      );
    }
}

export default BusinessList;
