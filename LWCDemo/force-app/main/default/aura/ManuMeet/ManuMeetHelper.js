({
    getAccountlist: function (component) {
        var action = component.get("c.getAcctlist");
        var self = this;
        action.setCallback(this, function (actionResult) {
            const accList = [{
                label: '',
                value: ''
            }];
            actionResult.getReturnValue().forEach((acc) => {
                accList.push({
                    label: acc.Name,
                    value: acc.Id
                });
            });
            component.set('v.accounts', accList);
        });
        $A.enqueueAction(action);
    },
    getoppslist: function (component) {
        var action = component.get("c.getopplist");
        var self = this;
        action.setCallback(this, function (actionResult) {
            const oppList = [{
                label: '',
                value: ''
            }];
            actionResult.getReturnValue().forEach((opp) => {
                oppList.push({
                    label: opp.Name,
                    value: opp.Id
                });
            });
            component.set('v.opportunities', oppList);
        });
        $A.enqueueAction(action);
    },
    createObjectData: function (component, event) {
        // get the contactList from component and add(push) New Object to List  
        var RowItemList = component.get("v.contactList");
        RowItemList.push({
            'chk': 'false',
            'selectedOPP': '',
            'PName': '',
            'amt': '',
            'stage': ''
        });
        // set the updated list to attribute (contactList) again    
        component.set("v.contactList", RowItemList);
    }
})
