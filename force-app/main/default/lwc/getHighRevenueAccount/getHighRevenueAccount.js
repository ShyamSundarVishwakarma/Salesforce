import { LightningElement, wire } from 'lwc';
import getAccountsDetail from '@salesforce/apex/ShyamAccountController.getAccountsDetail';

export default class GetHighRevenueAccount extends LightningElement {
    account=[];
countofRecords=5;

connectedCallback(){
    getAccountsDetail({count:this.countofRecords}).then(response =>{
        console.log('Response imperative approch',response);
         this.account=response;
    }).catch(error => {
        console.error('error',error);
    })
}

setcount(event){
    console.log('value',event.target.value);
    let inputValue= event.target.value;  
    if(inputValue=='') return;
    this.countofRecords=inputValue;
      getAccountsDetail({count:this.countofRecords}).then(response =>{
        console.log('Response imperative approch',response);
         this.account=response;
    }).catch(error => {
        console.error('error',error);
    })
}



// @wire(getAccountsDetail) 
// getAccountHandler(response){
//     const{data,error}=response;
//     if(error){
//         console.error(error);
//         return;
//     }
//     if(data){
//         this.account=data;
//     }
// }



}
