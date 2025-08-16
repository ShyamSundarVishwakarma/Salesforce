import { LightningElement } from 'lwc';

export default class ParentLWC extends LightningElement {
    countValue=0;
       handleAdd() {
        this.countValue++;
    }

    handleSubstract() {
        this.countValue--;
    }
    handleMulti(event){
        const multiplyNumber=event.detail;
        this.countValue *=multiplyNumber;
    }
}