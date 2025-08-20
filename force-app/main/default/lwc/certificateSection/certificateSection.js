import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/ExperienceCloudProject';
export default class CertificateSection extends LightningElement {
     data=[
            {
                id:1,
                name:"Admin selesforce",
                date:"20/08/2025",
                cer_id:"1234",
                image:Image_Url+"/Experience_cloud_project/administrater_cer.png",
               
            },
            {
                id:2,
                 name:"Business Development",
                date:"20/08/2024",
                cer_id:"1234",
                image:Image_Url+"/Experience_cloud_project/business_cer.jpeg",
               
            },
            {
                id:3,
                 name:"Experience cloud",
                date:"20/08/2025",
                cer_id:"1234",
                image:Image_Url+"/Experience_cloud_project/experience_cer.png",
            
            },
            {
                id:4,
                 name:"Platform",
                date:"20/08/2025",
                cer_id:"1234",
                image:Image_Url+"/Experience_cloud_project/platform_cer.png",
               
            }
        ];
}