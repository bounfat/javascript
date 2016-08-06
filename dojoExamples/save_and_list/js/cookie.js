/**
 * Created by Fatih on 3.08.2016.
 */

require([
    "dojo/cookie",
    "dojo/dom",
    "dojo/on",
    "dojo/parser",
    "dojo/dom-attr",
    "dojo/json",

    "dijit/Dialog",
    "dijit/form/Button",
    "dijit/form/TextBox",
    "dijit/form/DateTextBox",
    "dijit/form/TimeTextBox"

], function (cookie, dom, on, parser, domAttr, json) {

    var cook = [];
    cook = json.parse(cookie("configObj"));
    console.log(cook);
    var myClickSubmit = function (evt) {
        var name = domAttr.get(dom.byId("name"), "value");
        var surname = domAttr.get(dom.byId("surname"), "value");
        var sdate = domAttr.get(dom.byId("sdate"), "value");
        var edate = domAttr.get(dom.byId("edate"), "value");
        var time = domAttr.get(dom.byId("time"), "value");
        var description = domAttr.get(dom.byId("description"), "value");

        var config = {
            name: name,
            surname: surname,
            sdate: sdate,
            edate: edate,
            time: time,
            description: description
        };

        cook.push(config);
        cookie("configObj", json.stringify(cook), {expires: 5});
    };

    parser.parse();

    on(dom.byId("submit"), "click", myClickSubmit);


});
