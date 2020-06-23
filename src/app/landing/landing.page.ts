import { Component, OnInit } from '@angular/core';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import inView from 'in-view';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  
  constructor(public animationCtrl: AnimationController) {
    const animation: Animation = this.animationCtrl.create()
    .addElement(document.querySelector('.square'))
    .duration(1000)
    .fromTo('opacity', '1', '0.5');

  }

  ngOnInit() {

  }

  
  play(){

  }

}
