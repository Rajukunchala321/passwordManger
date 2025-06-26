import React, { Component } from "react";

export default class PasswordContainerComponent extends Component {
  render() {
    const {eachPswContent, showPassword, onDelete} = this.props;
    const { websiteUrl, userName, password, id } = eachPswContent;
    console.log(websiteUrl);
    return (
      <>
        <div className="psw-card-container">
            <div className="each-psw-container">
              <div className="profile-txt">Y</div>
              <div className="fields-containers">
                <div className="fields">website url:{websiteUrl}</div>
                <div className="fields">User name: {userName}</div>
                <div className="fields">Password: {showPassword ? password: "*****"}</div>
              </div>
              <button onClick={()=>onDelete(id)}>Delete</button>
            </div>
          </div>
      </>
    );
  }
}
