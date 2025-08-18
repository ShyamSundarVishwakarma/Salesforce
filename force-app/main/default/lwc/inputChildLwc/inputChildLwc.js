import { LightningElement,api } from 'lwc';

export default class InputChildLwc extends LightningElement {
    @api counter= 0;
    @api maximiseCounter(){
        this.counter+=100;
        
    }
}