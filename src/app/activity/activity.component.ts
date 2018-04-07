import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  activity: any;
  act:any;
  constructor() {
    this.activity =
      [
        { heading: "WEB DESIGN & DEVELOPMENT", para: "We believe in augmenting the growth of our clients with superior site development and creative designs." },
        { heading: "ECOMMERCE SOLUTIONS", para: "We convert your dreams into reality, offering your brand a magical aura through our cutting edge e-commerce solutions." },
        { heading: "MOBILE APP DEVELOPMENT", para: "We offer complete mobile application development services and allow you to keep the pace regardless the place." },
        { heading: "SEO OPTIMIZATION", para: "We help your business grow by improving your presence in online search and build your brand online." },
        { heading: "SUPPORT AND MAINTAINENCE", para: "We are committed to providing you with real value through prompt, helpful service and better understanding of technology." },
        { heading: "HOSTING SOLUTIONS", para: "Our enterprise hosting solutions are here to help, no matter how complex your hosted infrastructure may be. our load balancers can intelligently distribute traffic between machines to keep your application performing at peak levels." },
      ]
      this.act =[
        { "tech":"Angular 5", "logo":"https://www.hopetutors.com/wp-content/uploads/2018/01/angular-5-training-in-chennai.png"},
        { tech:"NodeJs", logo:"https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"},
        { tech: " Ionic/Cordova", logo:"http://www.engineermaster.in/images/services/ionic.png"},
        { tech: "MangoDB", logo:"http://joelcox.io/scripts/logos/mongo-logo.png"},
        { tech: "MySQL", logo:"https://seeklogo.com/images/M/MySQL-logo-F6FF285A58-seeklogo.com.png"}
      ]



  }
}
