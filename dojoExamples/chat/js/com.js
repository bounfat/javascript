/**
 * Created by Fatih on 11.08.2016.
 */

define(["dojo/topic", "dojo/_base/declare"], function (topic, declare) {

    var event = declare("com", [topic], {
        pub: function (msgName, msg) {
            topic.publish(msgName, {msg: msg});
        },
        sub: function (msgName, component) {
            topic.subscribe(msgName, function (e) {
                component.set("value", e.msg);
                //handle.remove();
            })
        }
    });

    return event;
});