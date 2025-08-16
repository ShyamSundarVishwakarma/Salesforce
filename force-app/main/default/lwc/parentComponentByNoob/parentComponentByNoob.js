import { LightningElement } from 'lwc';

export default class ParentComponentByNoob extends LightningElement {
    handleClick(){
        this.template.querySelector("c-child-component-by-noob").handleChangeValue();
    }
}