/**
 * Created by Fatih on 7.08.2016.
 */

define(['dojo/_base/declare'], function(declare){
    var Demo = declare(null, {
        constructor: function(){
            console.debug("this is Demo object #" + Demo.counter++);
        }
    });

    Demo.counter = 0;

    return Demo;
})

