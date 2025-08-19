import { LightningElement,api} from 'lwc';
import Image_Url from '@salesforce/resourceUrl/ExperienceCloudProject';
export default class SkillSection extends LightningElement {

    @api skillName1;
    @api skillBarValue1;
      @api skillName2;
     @api skillBarValue2;
      @api skillName3;
     @api skillBarValue3;
       @api skillName4;
     @api skillBarValue4;
      @api skillName5;
     @api skillBarValue5;


    // skillName1="Salesforce Lightning";
    // skillBarValue1='100';
    //  skillName2='LWC';
    // skillBarValue2='60';
    //  skillName3='Apex,Trigger,Flow';
    // skillBarValue3='80';
    //   skillName4='Rest Api Integration';
    // skillBarValue4='70';
    //  skillName5='Service, Experience Cloud';
    // skillBarValue5='50';

      skillImage=Image_Url+"/Experience_cloud_project/skill.jpeg";
}