import React, { Component } from "react";

export default class PasswordContainerComponent extends Component {
  render() {
    const {eachPswContent} = this.props;
    const { websiteUrl, userName, password } = eachPswContent;
    console.log(websiteUrl);
    return (
      <>
        <div className="psw-card-container">
            <div className="each-psw-container">
              <div className="profile-txt">Y</div>
              <div className="fields-containers">
                <div className="fields">website url:{websiteUrl}</div>
                <div className="fields">User name: {userName}</div>
                <div className="fields">Password: {password}</div>
              </div>
              <button>Delete</button>
            </div>
          </div>
      </>
    );
  }
}
