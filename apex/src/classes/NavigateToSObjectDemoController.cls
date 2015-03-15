public class NavigateToSObjectDemoController {
    
    @AuraEnabled
    public static List<Account> getAccounts() {
        return [SELECT Id,Name FROM Account ORDER BY Name ASC LIMIT 200];
    }
}