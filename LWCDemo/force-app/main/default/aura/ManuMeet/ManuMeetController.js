({
    doinit: function (component, event, helper) {
        helper.getAccountlist(component);
    },
    doSomething:function(component, event, helper)
    {
         helper.getoppslist(component);
    }
})