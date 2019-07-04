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
            component.set('v.accounts',accList );
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
    }
})