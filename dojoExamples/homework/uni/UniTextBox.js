/**
 * Created by Fatih on 8.08.2016.
 */

define([
    "dojo/_base/declare",
    "dijit/form/TextBox",
    "dojo/on",
    "dojo/mouse",
    "dojo/dom"
], function (declare, TextBox, on, mouse, dom) {

    var UniTextBox = declare("UniTextBox", TextBox, {
        constructor: function () {
            console.debug("oluştu");
        },
        value: "Uni TextBox",
        postCreate: function () {
            this.inherited(arguments);
            on(dom.byId("textbox"), "click", function(){
                console.log("clicked");
            });
        }

    });
    return UniTextBox;
});

