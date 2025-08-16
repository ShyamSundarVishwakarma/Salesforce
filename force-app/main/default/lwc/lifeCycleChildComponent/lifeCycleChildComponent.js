import { LightningElement } from 'lwc';

export default class LifeCycleChildComponent extends LightningElement {
    constructor(){
        super();
        console.log("recieve from child constructor");
    
    }
    connectedCallback(){
        console.log("recieve from child connected call back");

    }

    renderedCallback(){
        console.log("recieve from child render call back");

    }
    disconnectedCallback(){
        console.log("recieve from child diconnected call back");
    }
}