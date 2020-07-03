import { Component, OnInit } from '@angular/core';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all';
//import inView from 'in-view';
import { Animation, AnimationController } from '@ionic/angular';
import { Router,ActivatedRoute, Params, NavigationExtras } from '@angular/router';
declare var ScrollMagic: any;
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  item:string='./Logo-Code1.png';
  sliderConfig={

  }
  
  constructor(private router:Router) {

  }

  ngOnInit() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    // Funciones para desactivar y activar el scroll en la página
    function disableScrolling() {
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function () { window.scrollTo(x, y); };
    };

    function enableScrolling() {
      window.onscroll = function () { };
    };
    (function horizontalScroll() {
      let container = document.getElementById("devlearning");

      let sections = gsap.utils.toArray(".slide");

      gsap.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + container.offsetWidth
        }
      });
    })();
    gsap.from("#container", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 3,
      ease: "sine.out",
    })
    gsap.from("#welcome", {
      opacity: 0,
      y: -100,
      duration: 1,
      delay: 4,
      ease: "sine.out",

    })
    gsap.from("#description", {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 4,
      ease: "sine.out",

    })
    gsap.from("#languages", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 4,
      ease: "sine.out",

    })
  }

  Login(){
    this.router.navigate(['/login']);
  }

  SignUp(){
    this.router.navigate(['/signup']);
  }

}
