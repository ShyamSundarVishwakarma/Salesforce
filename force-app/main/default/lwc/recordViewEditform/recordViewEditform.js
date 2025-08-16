import { LightningElement } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';
import Account_Object from '@salesforce/schema/Account';
import Account_Name_Field from '@salesforce/schema/Account.Name';
import Industry_field from '@salesforce/schema/Account.Industry';

export default class RecordViewEditform extends LightningElement {
    objectApiName=Account_Object;
    namefield=Account_Name_Field;
    industryfield=Industry_field;
    AccountId='created account id here';
    handleSuccess(event){
        this.AccountId=event.detail.Id;
        const events=new ShowToastEvent({title:"successfull",
            message:"account created", variant:'success'
        });
        this.dispatchEvent(events);
    }
}