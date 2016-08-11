/**
 * Created by Fatih on 10.08.2016.
 */

define(["dojo/_base/declare", "dijit/form/TextBox", "dijit/_Widget", "dojo/on", "dojo/keys"], function (declare, TextBox, on, keys) {

    var myTextBox = declare("myTextBox", [TextBox], {
        constructor: function () {

        },
        value: "",
        postCreate: function () {
            this.inherited(arguments);
        }
    });

    return myTextBox;
});
