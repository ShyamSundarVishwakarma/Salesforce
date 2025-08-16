import { LightningElement,api } from 'lwc';
import Employee_Object from '@salesforce/schema/Account';
import Employee_Name_Field from '@salesforce/schema/Account.Name';
import Industry_field from '@salesforce/schema/Account.Industry';
export default class RecordViewForm extends LightningElement {
    objectApiName=Employee_Object;
    nameField=Employee_Name_Field;
    accountNumberField=Industry_field;
    @api recordId="a00gL000008JW61QAG";
}