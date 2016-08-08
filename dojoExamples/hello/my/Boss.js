/**
 * Created by Fatih on 8.08.2016.
 */

define(["dojo/_base/declare", 'my/Employee'], function(declare, Employee){
    return declare(Employee, {
        askForRaise: function(){
            return this.salary * 0.25;
        }
    });
});