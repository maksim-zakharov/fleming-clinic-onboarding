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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var api = require("../../services/api.service");
var NotificationService = require("../../services/notification.service");
require("../../css/form_styles.css");
var constants_1 = require("../../constants");
var RoomDetailsModal_1 = require("./RoomDetailsModal");
var RoomDetails_1 = require("./RoomDetails");
var i18n_context_1 = require("../../contexts/i18n.context");
var Input_1 = require("../../components/Input");
var Select_1 = require("../../components/Select");
var Section_1 = require("../../components/Section");
var Button_1 = require("../../components/Button");
var Index = function () {
    var i18n = react_1.useContext(i18n_context_1.i18nContext);
    var govValOptions;
    if (i18n.lang === 'en') {
        govValOptions = [
            'ADH DHAHIRAH',
            'AL BURAYMI',
            'AL DAKHLIYAH',
            'AL WUSTA',
            'DHOFAR',
            'MUSANDAM',
            'MUSCAT',
            'NORTH ASH SHARIQIYAH',
            'SOUTH ASH SHARIQIYAH',
            'NORTH BATINAH',
            'SOUTH BATINA',
        ];
    }
    else {
        govValOptions = [
            'الظاهرة',
            'البريمي',
            'الداخلية',
            'الوسطى',
            'ظفار',
            'مسندم',
            'مسقط',
            'شمال الشرقية',
            'جنوب الشرقية',
            'شمال الباطنة',
            'جنوب الباطنة',
        ];
    }
    var diction;
    if (i18n.lang === 'en') {
        diction = {
            'ADH DHAHIRAH': constants_1.ADH_DHAHIRAH,
            'AL BURAYMI': constants_1.AL_BURAYMI,
            'AL DAKHLIYAH': constants_1.AL_DAKHLIYAH,
            'AL WUSTA': constants_1.AL_WUSTA,
            DHOFAR: constants_1.DHOFAR,
            MUSANDAM: constants_1.MUSANDAM,
            MUSCAT: constants_1.MUSCAT,
            'NORTH ASH SHARIQIYAH': constants_1.NORTH_ASH_SHARIQIYAH,
            'SOUTH ASH SHARIQIYAH': constants_1.SOUTH_ASH_SHARIQIYAH,
            'NORTH BATINAH': constants_1.NORTH_BATINAH,
            'SOUTH BATINA': constants_1.SOUTH_BATINA
        };
    }
    else {
        diction = {
            الظاهرة: constants_1.ADH_DHAHIRAHAr,
            البريمي: constants_1.AL_BURAYMIAr,
            الداخلية: constants_1.AL_DAKHLIYAHAr,
            الوسطى: constants_1.AL_WUSTAAr,
            ظفار: constants_1.DHOFARAr,
            مسندم: constants_1.MUSANDAMAr,
            مسقط: constants_1.MUSCATAr,
            'شمال الشرقية': constants_1.NORTH_ASH_SHARIQIYAHAr,
            'جنوب الشرقية': constants_1.SOUTH_ASH_SHARIQIYAHAr,
            'شمال الباطنة': constants_1.NORTH_BATINAHAr,
            'جنوب الباطنة': constants_1.SOUTH_BATINAAr
        };
    }
    var _a = react_1.useState({
        roomDetailsArray: []
    }), state = _a[0], setState = _a[1];
    var name = state.name, nameArabic = state.nameArabic, governorate = state.governorate, city = state.city, roomDetailsArray = state.roomDetailsArray, isModalVisible = state.isModalVisible, rating = state.rating, description = state.description, descriptionArabic = state.descriptionArabic, legalName = state.legalName, crPerson = state.crPerson, crDetails = state.crDetails, signatoryName = state.signatoryName, signatoryPhoneNumber = state.signatoryPhoneNumber, signatoryEmail = state.signatoryEmail, bankName = state.bankName, branch = state.branch, accountNumber = state.accountNumber, focalName = state.focalName, focalEmail = state.focalEmail, focalPhoneNumber = state.focalPhoneNumber, crNumber = state.crNumber, contactName = state.contactName, contactEmail = state.contactEmail, website = state.website;
    var addItem = function (item) {
        console.log(item);
        setState(function (prev) { return (__assign(__assign({}, prev), { roomDetailsArray: prev.roomDetailsArray.concat(item), isModalVisible: false })); });
    };
    var deleteItem = function (item) {
        setState(function (prev) { return (__assign(__assign({}, prev), { roomDetailsArray: prev.roomDetailsArray.concat(item) })); });
    };
    var register = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.register(state)];
                case 1:
                    error = (_a.sent()).error;
                    if (error) {
                        NotificationService.error(error.message);
                    }
                    else {
                        NotificationService.success('Hotel successfully registered');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var showModal = function () {
        setState(function (prev) { return (__assign(__assign({}, prev), { isModalVisible: true })); });
    };
    var onClose = function () {
        setState(function (prev) { return (__assign(__assign({}, prev), { isModalVisible: false })); });
    };
    return (<>
      <div className="container mainTextDir">
        <div style={{ width: '40rem' }}>
          <h1 style={{ fontWeight: 'bold' }} id="registrationPage">
            Registration Page
          </h1>
          <div style={{ textAlign: 'center' }}>
            <img src="css/images/register_image.png" style={{ width: '30rem' }}/>
          </div>

          <Section_1["default"] title="Hotel Details" description="Please enter your hotel details below, in both Arabic and English."/>

          <Input_1["default"] value={name} label="Hotel Name"/>
          <Input_1["default"] value={nameArabic} label="Hotel Name (Arabic)"/>
          <Input_1["default"] value={website} label="Hotel Website"/>
          <Select_1["default"] label="Governorate" value={governorate} options={govValOptions}/>
          <Select_1["default"] label="City/Welayat" value={city} options={diction[governorate]}/>
          <Input_1["default"] value={rating} label="Hotel Star Rating"/>
          <div className="form-group govern">
            <select style={{ marginTop: '0.5rem' }} required id="valStars">
              <option value="star" id="selectStars">
                Select stars
              </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
            <label htmlFor="select" className="control-label" id="stars">
              Stars
            </label>
            <i className="bar"/>
          </div>
          <Input_1["default"] value={description} label="Hotel Description" type="textarea"/>
          <Input_1["default"] value={descriptionArabic} label="Hotel Description (Arabic)" type="textarea"/>

          <Section_1["default"] title="Hotel CR Details" description="Please enter the details of your hotel’s Company Registration. eMushrif will use these details to draft a business contract between your hotel and eMushrif."/>
          <Input_1["default"] value={legalName} label="Legal Company Name (as written on CR)"/>
          <Input_1["default"] value={crNumber} label="CR Number"/>
          <Input_1["default"] value={crPerson} label="Contact Person (as listed on CR)"/>
          <Input_1["default"] value={crDetails} label="Contact Details (as listed on CR)"/>
          <Input_1["default"] value={signatoryName} label="Authorized Signatory Name"/>
          <Input_1["default"] value={signatoryPhoneNumber} label="Authorized Signatory Phone Number"/>
          <Input_1["default"] value={signatoryEmail} label="Authorized Signatory Email" type="email"/>

          <Section_1["default"] title="Hotel Bank Details" description="Please enter the details of your hotel's bank account. eMushrif will use these details to set up the reconciliation process with your hotel. Reconciliation between eMushrif and the hotels will happen weekly.

eMushrif will collect the clients' advanced payments, deduct its 10%  fee, and pass on the hotels' payments."/>
          <Input_1["default"] value={bankName} label="Bank Name"/>
          <Input_1["default"] value={branch} label="Branch"/>
          <Input_1["default"] value={accountNumber} label="Bank Account Number"/>

          <Section_1["default"] title="Hotel Focal Point" description="Please share the name and the contact details of the focal point within your hotel. The focal point needs to be a person that eMushrif can communicate with when needed."/>
          <Input_1["default"] value={focalName} label="Focal Point Name"/>
          <Input_1["default"] value={focalEmail} label="Focal Point Email" type="email"/>
          <Input_1["default"] value={focalPhoneNumber} label="Focal Point Phone Number"/>

          <Section_1["default"] title="Sahala Access" description="Please share the information about the staff you would like to provide Sahala platform access to. The staff will be able to log into the platform using either their mobile number or email.

Please enter the details of a minimum of 2 and a maximum of 5 staff members. "/>
          <Button_1["default"] text="Add A New Staff Member" onClick={showModal} type="primary"/>

          <Section_1["default"] title="Room Type Details" description="Please enter the details of the room types that you would like to display on the platform. Please make sure this information is accurate, as eMushrif will showcase it directly on the Sahala platform."/>

          <div>
            <div className="row" style={{ direction: 'ltr' }}>
              {roomDetailsArray.length > 0 && (<div className="col-md-2" style={{
                textAlign: 'right',
                marginRight: 0,
                paddingTop: '8.5rem'
            }}>
                  <button style={{ border: 'white', backgroundColor: 'white' }} onClick={deleteItem}>
                    <img src="css/images/bin.png" style={{ width: '2.2rem' }} id="deletebtn"/>
                  </button>
                </div>)}
            </div>
            {roomDetailsArray.length > 0 &&
            roomDetailsArray.map(function (details) { return (<RoomDetails_1["default"] details={details}/>); })}
          </div>

          <Button_1["default"] text="Add A New Room Type" onClick={showModal} type="primary"/>

          <Button_1["default"] text="Submit Registration Form" onClick={register} fullWidth={true}/>
          <br />
          <br />
        </div>
      </div>
      <RoomDetailsModal_1["default"] isVisible={isModalVisible} onOk={addItem} onClose={onClose}/>
    </>);
};
exports["default"] = Index;
