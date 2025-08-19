import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/ExperinceCloudImages';
import {NavigationMixin} from 'lightning/navigation';
export default class QuickLinks extends NavigationMixin(LightningElement) {
    data=[
        {
            id:1,
            image:Image_Url+"/Experience_cloud_project/hero2.jpg",
            text:"Projects",
        },
        {
            id:2,
            image:Image_Url+"/Experience_cloud_project/hero3.jpeg",
            text:"Skill",
        },
        {
            id:3,
            image:Image_Url+"/Experience_cloud_project/Certificate.jpeg",
            text:"Certificate",
        }
    ];
   
    handleClick(event){
        
        let selectedCard=event.currentTarget.dataset.id;
        //console.log('selectedCard'+JSON.stringify(selectedCard));
        if(selectedCard==1){
            this.navigateToPage("Project__c");
        }
        else if(selectedCard==2){
           this.navigateToPage("skill__c");

        }else if(selectedCard==3){
            this.navigateToPage("certificates__c");
        }


    }
    navigateToPage(pageApiName) {
    this[NavigationMixin.Navigate]({
        type: 'comm__namedPage',
        attributes: {
            name: pageApiName   // must match the page's Developer Name
        }
    });
}
}