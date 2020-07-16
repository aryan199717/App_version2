import { TabnavPopoverComponent } from "./../tabnav-popover/tabnav-popover.component";
import { IonicModule, PopoverController } from "@ionic/angular";
import { AccountPage } from "./../account/account.page";
import { SupportPage } from "./../support/support.page";
import { TeamsPage } from "./../teams/teams.page";
import { DashboardPage } from "./../dashboard/dashboard.page";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabnav",
  templateUrl: "./tabnav.page.html",
  styleUrls: ["./tabnav.page.scss"],
})
export class TabnavPage implements OnInit {
  dashboardPage = DashboardPage;
  teamsPage = TeamsPage;
  supportPage = SupportPage;
  accountPage = AccountPage;

  DEFAULT_CONFIG: {
    dragThreshold: 200;
    allowElementScroll: true;
    maxDragAngle: 50;
    sideMenuThreshold: 50;
    transitionDuration: 300;
    shortSwipeDuration: 0;
    sideMenu: "right";
    debug: false;
    avoidElements: false;
  };
  popoverController: any;

  constructor(public popovercontroller: PopoverController) {}
  async presentPopover(ev: any) {
    const popover = await this.popovercontroller.create({
      component: TabnavPopoverComponent,
      cssClass: "my-custom-class",
      event: ev,
    });
    return await popover.present();
  }

  ngOnInit() {}
}
