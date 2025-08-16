import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ShowTostEvent extends LightningElement { 
    myTitle="salesforce shyam";
     handleClick(){
this.showToast();
     }
     showToast(){
        const event = new ShowToastEvent({
            title:'show toast event',
            message:'Want to see the toast',
            variant:'success',
        })
        this.dispatchEvent(event);

     }
}