import { LightningElement } from 'lwc';

export default class RenderingConditionalStatement extends LightningElement {
    isVisible=true;
    handleClick(){

       this.isVisible = !this.isVisible;
    }
}