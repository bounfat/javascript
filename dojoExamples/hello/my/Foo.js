/**
 * Created by Fatih on 7.08.2016.
 */

define(["dojo/_base/declare", "my/Person"], function(declare, Foo){
    return declare(null, {
        arr: [ 1, 2, 3, 4 ], // object. shared by all instances!
        num: 5,              // non-object. not shared.
        str: "string",       // non-object. not shared.
        obj: new Foo(),      // object. shared by all instances!

        constructor: function(){
            this.arr = [ 1, 2, 3, 4 ]; // per-instance object.
            this.obj = new Foo();      // per-instance object.
        }
    });
});
