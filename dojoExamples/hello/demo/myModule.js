/**
 * Created by Fatih on 7.08.2016.
 */
define(["dojo/_base/declare"], function(declare){
    return declare(null, {
        constructor: function(name, age, residence){
            this.name = name;
            this.age = age;
            this.residence = residence;
        }
    });
});