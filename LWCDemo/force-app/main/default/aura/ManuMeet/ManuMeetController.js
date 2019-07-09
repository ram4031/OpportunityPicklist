({
    doinit: function (component, event, helper) {
        helper.getAccountlist(component);
    },
    doSomething: function (component, event, helper) {
        helper.getoppslist(component);
    },
    // function for create new object Row in Contact List 
    addNewRow: function (component, event, helper) {
        // call the comman "createObjectData" helper method for add new Object Row to List  
        helper.createObjectData(component, event);
    },
})
