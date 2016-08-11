/**
 * Created by Fatih on 10.08.2016.
 */

define(["dojo/_base/declare", "dijit/form/TextBox"], function (declare, TextBox) {

    var myTextBox = declare("myTextBox", [TextBox], {
        constructor: function () {
            console.log("created");
        },
        value: "deneme"
    });
    return myTextBox;
});