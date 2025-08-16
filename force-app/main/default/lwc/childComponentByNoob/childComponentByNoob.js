import { LightningElement,api } from 'lwc';

export default class ChildComponentByNoob extends LightningElement {
   @api itemName="salesforce shyam child component";
   @api handleChangeValue(){
    this.itemName="Salesforce LWc demo";
   }

}