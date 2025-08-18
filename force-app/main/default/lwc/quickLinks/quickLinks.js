import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/ExperinceCloudImages';
export default class QuickLinks extends LightningElement {
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
    ]
}