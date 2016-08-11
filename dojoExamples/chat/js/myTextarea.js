/**
 * Created by Fatih on 11.08.2016.
 */

define(["dojo/_base/declare", "dijit/form/Textarea"], function (declare, Textarea) {

    var myTextarea = declare("myTextarea", [Textarea], {
        constructor: function () {
            console.log("textarea created");
        }
    })
    return myTextarea;

});