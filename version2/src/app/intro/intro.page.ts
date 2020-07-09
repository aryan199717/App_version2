import { Component, OnInit, ViewChildren } from "@angular/core";
import { NavController, IonSlides } from "@ionic/angular";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.page.html",
  styleUrls: ["./intro.page.scss"],
})
export class IntroPage implements OnInit {
  constructor(public nav: NavController) {}
  @ViewChildren("slides") slides: IonSlides;
  public selectedSlide: any = [];
  ngOnInit() {}

  gotoLogin() {
    this.nav.navigateForward(["/login"]);
  }
  gotoRegister() {
    console.log("Register page in not created yet!!");
  }

  slideOpts = {
    initialSlide: 0,
    speed: 900,
    effect: "flip",
    autoplay: true,
  };

  ionSlideChange(slides) {
    this.selectedSlide = slides;
    // console.log(this.selectedSlide);
    // slides.getIndex.((sliderIndex) => {
    //   if (sliderIndex == 2) {
    //     console.log("End is reached!!");
    //   } else {
    //     console.log("Abhi chal raha hai!!");
    //   }
    // });
  }
}
