"use strict";
exports.__esModule = true;
var React = require("react");
require("../../css/form_styles.css");
var RoomDetails = function (_a) {
    var details = _a.details;
    return (<div id="listView">
      <div className="single-room">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 feature-box">
              <div className="row">
                <div className="col-lg-8 feature-box">
                  <span className="roomTypeArabic">Room Type : </span>
                </div>
                <div className="col-lg-4 feature-box" style={{ textAlign: 'right' }}>
                  <span>{details.type}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 feature-box">
                  <span className="roomTypeArabic">Room Type (Arabic) : </span>
                </div>
                <div className="col-lg-4 feature-box" style={{ textAlign: 'right' }}>
                  <span>{details.typeAr}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 feature-box">
                  <span className="beds">Number of Beds : </span>
                </div>
                <div className="col-lg-4 feature-box" style={{ textAlign: 'right' }}>
                  <span>{details.beds}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 feature-box">
                  <span className="rooms">Number of Room of this Type : </span>
                </div>
                <div className="col-lg-4 feature-box" style={{ textAlign: 'right' }}>
                  <span>{details.rooms}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 feature-box">
                  <span className="price">Price : </span>
                </div>
                <div className="col-lg-4 feature-box" style={{ textAlign: 'right' }}>
                  <span>{details.price}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 feature-box">
                  <span className="roomDescription">Description : </span>
                </div>
                <div className="col-lg-6 feature-box" style={{ textAlign: 'right' }}>
                  <span>{details.desc}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 feature-box">
                  <span id="roomDescriptionArabic">Description (Arabic) : </span>
                </div>
                <div className="col-lg-6 feature-box" style={{ textAlign: 'right' }}>
                  <span>{details.descAr}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
exports["default"] = RoomDetails;
