import { LightningElement } from 'lwc';

export default class InputParentLwc extends LightningElement {
    startCounter=0;
    handleChangeCounter(event){
        this.startCounter=parseInt(event.target.value);

    }
    handleMaximiseCounter(){
        const updatCounter=this.template.querySelector('c-input-child-lwc');
        updatCounter.maximiseCounter();
    }
}