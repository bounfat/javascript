/**
 * Created by Fatih on 8.08.2016.
 */

define([
    "dojo/_base/declare",
    "dijit/form/ValidationTextBox",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/on",
    "dojo/_base/lang",
    "dojo/dom"

], function (declare, ValidationTextBox, _WidgetBase, _TemplatedMixin, on, lang, dom) {

    var UniTextBox = declare("UniTextBox", [ValidationTextBox], {
        constructor: function () {
            console.debug("oluştu");
        },
        value: null,
        postCreate: function () {

            this.inherited(arguments);
            console.log("Post create");
            on(dom.byId("uniTextBox"), "click", function () {
                console.log("clicked");
            });
        },

        // Template kısmına tekrar bakılacak..!

        /*templateString: "<div>" +
         "<input " +
         "data-dojo-attach-point='focusNode' " +
         "data-dojo-attach-event='onclick: increment'" + " />"
         + "</div>",*/

        _setValueAttr: {node: "focusNode", type: "attribute", attribute: "value"},

        increment: function () {
            this.focusNode.value = ++this.value;
        }


    });
    return UniTextBox;
});

