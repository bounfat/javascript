/**
 * Created by Fatih on 8.08.2016.
 */

define(["dojo/_base/declare", "dijit/form/TextBox", "dojo/on",
    "dojo/mouse"], function (declare, TextBox) {

    var UniTextBox = declare("UniTextBox", TextBox, {
        constructor: function () {
            console.debug("oluştu");
        },
        value: "Uni TextBox",
        onClick: function (evt) {
            console.log("i was clicked");
            this.inherited(arguments);
        }

    });
    return UniTextBox;
});

