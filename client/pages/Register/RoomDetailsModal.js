"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var antd_1 = require("antd");
var react_1 = require("react");
var RoomDetailsModal = function (props) {
    var isVisible = props.isVisible, onOk = props.onOk, onClose = props.onClose;
    var _a = react_1.useState({}), details = _a[0], setDetails = _a[1];
    var addItem = function (item) {
        onOk(item);
    };
    var onCancel = function () {
        setDetails({});
        onClose();
    };
    var renderFooter = function () {
        return (<button className="mdc-button mdc-button--raised start" onClick={function () { return addItem(details); }}>
        <span className="mdc-button__label" style={{ fontWeight: 'bolder', fontSize: '2rem' }}>+ </span>
        <span className="mdc-button__label addNew">Add New</span>
      </button>);
    };
    return (<antd_1.Modal title={null} visible={isVisible} okText="Submit" onOk={function () { return onOk; }} footer={renderFooter()} onCancel={onCancel}>
      <form>
        <div className="form-group" style={{ width: '45rem', marginBottom: '3rem', marginTop: '4rem' }}>
          <input type="text" name="valType" id="valType" dir="ltr" onChange={function (e) { return setDetails(function (prev) { return (__assign(__assign({}, prev), { type: e.target.value })); }); }} required value={details.type}/>
          <label htmlFor="input" className="control-label roomType">Room Type</label><i className="bar"></i>
        </div>
        <div className="form-group" style={{ width: '45rem', marginBottom: '3rem', marginTop: '0rem' }}>
          <input type="text" dir="rtl" name="valTypeArabic" id="valTypeArabic" onChange={function (e) { return setDetails(function (prev) { return (__assign(__assign({}, prev), { typeAr: e.target.value })); }); }} required value={details.typeAr}/>
          <label htmlFor="input" className="control-label roomTypeArabic">Room type (Arabic)</label><i className="bar"></i>
        </div>
        <div className="form-group" style={{ width: '45rem', marginBottom: '3rem', marginTop: '0rem' }}>
          <input type="number" name="valBeds" id="valBeds" required onChange={function (e) { return setDetails(function (prev) { return (__assign(__assign({}, prev), { beds: e.target.value })); }); }} value={details.beds}/>
          <label htmlFor="input" className="control-label beds">Number of Beds</label><i className="bar"></i>
        </div>
        <div className="form-group" style={{ width: '45rem', marginBottom: '3rem', marginTop: '0rem' }}>
          <input type="number" name="valRooms" id="valRooms" required onChange={function (e) { return setDetails(function (prev) { return (__assign(__assign({}, prev), { rooms: e.target.value })); }); }} value={details.rooms}/>
          <label htmlFor="input" className="control-label rooms">Number of Room of this Type</label><i className="bar"></i>
        </div>
        <div className="form-group" style={{ width: '45rem', marginBottom: '3rem', marginTop: '0rem' }}>
          <input type="number" step="0.001" name="valPrice" id="valPrice" onChange={function (e) { return setDetails(function (prev) { return (__assign(__assign({}, prev), { price: e.target.value })); }); }} required value={details.price}/>
          <label htmlFor="input" className="control-label p_label price">Price <span><em>(OMR 100.000)</em></span></label><i className="bar"></i>
        </div>
        <div className="form-group" style={{ width: '45rem', marginBottom: '3rem', marginTop: '0rem' }}>
        <textarea className="form__field" placeholder="Your Message" rows={6} style={{ width: '45rem' }} name="valDesc" onChange={function (e) { return setDetails(function (prev) { return (__assign(__assign({}, prev), { desc: e.target.value })); }); }} value={details.desc} required/>
          <label htmlFor="message" dir="ltr" className="form__label roomDescription">Description</label>
        </div>
        <div className="form-group" style={{ width: '45rem', marginBottom: '3rem', marginTop: '0rem' }}>
        <textarea className="form__field" dir="rtl" placeholder="Your Message" rows={6} style={{ width: '45rem' }} value={details.descAr} onChange={function (e) { return setDetails(function (prev) { return (__assign(__assign({}, prev), { descAr: e.target.value })); }); }} name="valDescArabic" required/>
          <label htmlFor="message" className="form__label" id="roomDescriptionArabic">Description (Arabic)</label>
        </div>
      </form>
    </antd_1.Modal>);
};
exports["default"] = RoomDetailsModal;
