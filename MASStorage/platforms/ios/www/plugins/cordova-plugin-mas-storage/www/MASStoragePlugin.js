cordova.define("cordova-plugin-mas-storage.MASStoragePlugin", function(require, exports, module) {
/* *
 * Copyright (c) 2016 CA, Inc. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 *
 */
/** 
 * @class MASStoragePlugin
 * @hideconstructor
 * @example
 * <caption>To get instance of {@link MASSecureLocalStorage} : An interface that is mapped to MASSecureLocalStorage Model of Native and controls Device local storage mechanism</caption>
 var MASSecureLocalStorage = new MASStoragePlugin.MASSecureLocalStorage();

 /**
 * A user defined success callback function. The contract of the function is out of scope for Mobile SDK, but the object passed to that function by Mobile SDK will conform to a structure based on operation type.
 * @callback successCallbackFunction
 * @param {Object} result The result object can take any form. It can be an object, or a plain string, a boolean or a number based on the API.
 * Developer may check for existance of result object to define success in such case and must not rely on the exact response format.<br>
 * To know about specific result for each API see {@link http://mas.ca.com/docs/cordova/latest/guides}
 */

 /**
 * A user defined error callback function. The contract of the function is out of scope for Mobile SDK, but the object passed to that function by Mobile SDK will conform to a strict structure.
 * @callback errorCallbackFunction
 * @param {Object} error A Json Object with below structure <br>{<br>&nbsp;&nbsp;"errorCode": &lt;The error code. For ex. 3003123&gt;,<br>&nbsp;&nbsp;"errorMessage": "&lt;The error message&gt;"<br>&nbsp;&nbsp;"errorInfo":"&lt;The Error Info&gt;"<br>}<br>
 */
var MASStoragePlugin;
module.exports = MASStoragePlugin = {
		
	/**
 	 * The constant which indicates the scope or the segment in which the data will be saved on device storage.
	 * @typedef {Object} MASLocalStorageSegment 
	 * @property {number} MASLocalStorageSegmentUnknown=-1 Unknown Mode
	 * @property {number} MASLocalStorageSegmentApplication=0 Data in this mode is stored and available in an Application Level
	 * @property {number} MASLocalStorageSegmentApplicationForUser=1 Data in this mode is stored and available in an Application for a specific User
  	 */
	 MASLocalStorageSegment: {
		 MASLocalStorageSegmentUnknown: -1,
		 MASLocalStorageSegmentApplication: 0,
		 MASLocalStorageSegmentApplicationForUser: 1
	 },
	
	/**
 	 * The constant which indicates the mime type of the data that will be saved. The developer can extend this to add more mime types.
	 * @typedef {Object} MASStorageMimeType 
	 * @property {string} TEXT_PLAIN="text/plain" For plain text data stream. Usually for ASCII character strings.
	 * @property {string} JSON="application/json" JSON/Dictionary type.
	 * @property {string} IMAGE_PNG="image/png" Image types of the extension PNG.
	 * @property {string} IMAGE_JPG="image/jpg" Image types of the extension JPG/JPEG.
  	 */
     MASStorageMimeType: {
         TEXT_PLAIN: "text/plain",
         JSON: "application/json",
         IMAGE_PNG: "image/png",
         IMAGE_JPG: "image/jpg"
     },

    /**
	 * @class MASSecureLocalStorage
	 * @hideconstructor
     * @classdesc Stores the data on local devices and fetches data from local device store. The method has the interfaces mapped to the native MASStorage class.
	 * <table>
	 *	<tr bgcolor="#D3D3D3"><th>MASLocal Storage Construtor</th></tr>
     *	<tr><td><i>var MASSecureLocalStorage = new MASStoragePlugin.MASSecureLocalStorage();</i></td></tr>
     * </table>
     */
	 MASSecureLocalStorage: function () {
		'use strict';

        /**
        * Saves the data to local storage with a specific {@link MASStorageMimeType} and for a specific {@link MASLocalStorageSegment}
        * @memberOf MASSecureLocalStorage
		* @function save
		* @instance
        * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
        * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
        * @param {MASStorageMimeType} mime mime type of the data
        * @param {string} key key that is used to store the data
        * @param {string} data data payload. In case of MimeTypes other than string, convert the payload bytes to Base64 string
        * @param {MASLocalStorageSegment} mode mode in which the data is to be saved
		* @example
		* var MASSecureLocalStorage = new MASStoragePlugin.MASSecureLocalStorage();
		* MASSecureLocalStorage.save(function(success){},function(error){},MASStorageMimeType.JSON,"emp_details","{"name":"Jon","age":23}",MASLocalStorageSegment.MASLocalStorageSegmentApplicationForUser);
        */
        this.save = function (successHandler, errorHandler, mime, key, data, mode) {
            return Cordova.exec(successHandler, errorHandler, "MASStoragePlugin", "saveToLocal", [mime, key, data, mode]);
        };

        /**
        * Finds data using key for a specific {@link MASLocalStorageSegment}
        * @memberOf MASSecureLocalStorage
		* @function findByUsingKeyAndMode
		* @instance
        * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
        * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
        * @param {string} key key of the data to be searched
        * @param {MASLocalStorageSegment} mode mode in which the data was saved
		* @example
		* var MASSecureLocalStorage = new MASStoragePlugin.MASSecureLocalStorage();
		* MASSecureLocalStorage.findByUsingKeyAndMode(function(success){},function(error){},"emp_details",MASLocalStorageSegment.MASLocalStorageSegmentApplicationForUser);
        */
        this.findByUsingKeyAndMode = function (successHandler, errorHandler, key, mode) {
            return Cordova.exec(successHandler, errorHandler, "MASStoragePlugin", "findByUsingKeyAndModeLocal", [key, mode]);
        };

        /**
        * Deletes data using key for a specific {@link MASLocalStorageSegment}
        * @memberOf MASSecureLocalStorage
		* @function deleteByUsingKeyAndMode
		* @instance
        * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
        * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
        * @param {string} key key of the data to be deleted
        * @param {MASLocalStorageSegment} mode mode in which the data was saved
        * @example
		* var MASSecureLocalStorage = new MASStoragePlugin.MASSecureLocalStorage();
		* MASSecureLocalStorage.deleteByUsingKeyAndMode(function(success){},function(error){},"emp_details",MASLocalStorageSegment.MASLocalStorageSegmentApplicationForUser);
        */
        this.deleteByUsingKeyAndMode = function (successHandler, errorHandler, key, mode) {
            return Cordova.exec(successHandler, errorHandler, "MASStoragePlugin", "deleteByUsingKeyAndModeLocal", [key, mode]);
        };

        /**
        * Deletes all data from the local device storage for a specific {@link MASLocalStorageSegment}
        * @memberOf MASSecureLocalStorage
		* @function deleteAllUsingMode
		* @instance
        * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
        * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
        * @param {MASLocalStorageSegment} mode mode for which the data needs to be deleted
		* @example
		* var MASSecureLocalStorage = new MASStoragePlugin.MASSecureLocalStorage();
		* MASSecureLocalStorage.deleteAllUsingMode(function(success){},function(error){},MASLocalStorageSegment.MASLocalStorageSegmentApplicationForUser);
        */
        this.deleteAllUsingMode = function (successHandler, errorHandler, mode) {
            return Cordova.exec(successHandler, errorHandler, "MASStoragePlugin", "deleteAllUsingModeLocal", [mode]);
        };

        /**
        * Returns the sets of keys for a specific {@link MASLocalStorageSegment}
        * @memberOf MASSecureLocalStorage
		* @function keySetForMode
		* @instance
        * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
        * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
        * @param {MASLocalStorageSegment} mode mode for which the key set is required
		* @example
		* var MASSecureLocalStorage = new MASStoragePlugin.MASSecureLocalStorage();
		* MASSecureLocalStorage.keySetForMode(function(success){},function(error){},MASLocalStorageSegment.MASLocalStorageSegmentApplicationForUser);
        */
        this.keySetForMode = function (successHandler, errorHandler, mode) {
			return Cordova.exec(successHandler, errorHandler, "MASStoragePlugin", "keySetForModeLocal", [mode]);
        };
     }
};
});
