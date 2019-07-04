public class opplist {
   
    @AuraEnabled
    public static list<opportunity> getopplist(string accountId){
        
        list<opportunity> opps = new list<opportunity>([select Id,AccountId,probability,stageName from opportunity where accountId=:accountId]);
        return opps;
    }
    @AuraEnabled
    public static list<account> getAcctlist(){
        
        list<account> accs = new list<opportunity>([select Id,Name from account limit 100]);
        return accs;
    }
}