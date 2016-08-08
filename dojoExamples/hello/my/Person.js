/**
 * Created by Fatih on 7.08.2016.
 */

define(["dojo/_base/declare", "dojo/_base/lang"], function (declare, lang) {
    return declare(null, {
        name: "Anonymous",
        age: null,
        residence: "Universe A",

        constructor: function (/*Object*/ kwArgs) {
            lang.mixin(this, kwArgs);
        },

        moveTo: function (/*String*/ residence) {
            this.residence = residence;
        }
    });
});