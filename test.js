var budgetController = (function() {

    var x = 23;

    var add = function (a) {
        return x+a;
    }

    return {
        publicTest : function (b) {
            return (add(b));
        }
    }
 })();


 var UIController = (function() {

    // Some code
 }) ();


 var Controller = (function(budgetCtrl, UICtrl){

    var z = budgetCtrl.publicTest(5);

    return {
        anotherpublic : function () {
            console.log(z);
        }
    }

 })(budgetController, UIController);