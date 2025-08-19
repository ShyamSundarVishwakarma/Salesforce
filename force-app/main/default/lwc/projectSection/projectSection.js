import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/ExperienceCloudProject';
export default class ProjectSection extends LightningElement {

         projectImage=Image_Url+"/Experience_cloud_project/project.jpeg";
         projectData=[
            {
                id:1,
                name:'Customer Project',
                description:'Self service portal build in salesforce experience cloud using custom lwc Apex logic Self service portal build in salesforce experience cloud using custom lwc Apex logic',
                technology:'Salesforce,Apex,Trigger,Lwc,JavaScript,Experience cloud,Integration',
                website:'www.google.com'
            },
             {
                id:2,
                name:'Porfolio',
                description:'Portfolio built in salesforceApex logic Self service portal logic Self service portal Apex logic Self service portal ',
                technology:'Salesforce,Lwc,Apex,Experience cloud,Integration',
                website:'www.google.com'
            }
         ]
}