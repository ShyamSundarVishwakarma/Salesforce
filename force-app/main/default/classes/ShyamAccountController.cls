public with sharing class ShyamAccountController {
@AuraEnabled(cacheable=true)
public static List<Account> getAccountsDetail(Integer count) {
    return [
        SELECT Id, Name, AnnualRevenue
        FROM Account
        ORDER BY AnnualRevenue DESC
        LIMIT :count
    ];
}
}