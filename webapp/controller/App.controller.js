/*global sap */

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/ValueState",
	"app/FormValidationUsingValidatorJs/utils/Validator"
], function (Controller, JSONModel, ValueState, Validator) {
	"use strict";

	return Controller.extend("app.FormValidationUsingValidatorJs.controller.App", {

		onInit: function () {
			// Attaches validation handlers
			sap.ui.getCore().attachValidationError(function (oEvent) {
				oEvent.getParameter("element").setValueState(ValueState.Error);
			});
			sap.ui.getCore().attachValidationSuccess(function (oEvent) {
				oEvent.getParameter("element").setValueState(ValueState.None);
			});

			// JSON dummy data
			var oData = {
				text: null,
				number: 0,
				date: null
			};

			var oModel = new JSONModel();
			oModel.setData(oData);

			this.getView().setModel(oModel);
		},

		onValidate: function () {
			// Create new validator instance
			var validator = new Validator();

			// Validate input fields against root page with id 'somePage'
			validator.validate(this.byId("somePage"));
		}
	});
});