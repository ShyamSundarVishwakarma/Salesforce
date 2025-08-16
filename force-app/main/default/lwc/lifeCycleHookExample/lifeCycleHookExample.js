import { LightningElement } from 'lwc';

export default class LifeCycleHookExample extends LightningElement {
    
    constructor(){
        super();
        console.log('call receive from call backback');
    }
    connectedCallback(){
        console.log('call receive from connected callback');
    }
    renderedCallback(){
        console.log('call receive from render callback');

    }
    errorCallback(){
        console.log("call receive from error callback");
    }
   
}