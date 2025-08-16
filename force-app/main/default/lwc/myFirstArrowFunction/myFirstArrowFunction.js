import { LightningElement } from 'lwc';

export default class MyFirstArrowFunction extends LightningElement {
    myTitle='salesforce shyam';

    connectedCallback(){
        let callmyfuction=this.myFunction(20,2);
        window.alert("call my function: "+callmyfuction);
    }
    // myFunction(dividend,divisor){
    //     return(dividend/divisor);
    // }

    myFunction=(dividend,divisor)=>{
          return(dividend/divisor);
    }
}