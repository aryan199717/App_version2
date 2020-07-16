import { Router } from "@angular/router";

import { Component, OnInit } from "@angular/core";

import { SuperTabs } from "@ionic-super-tabs/angular";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  constructor(public st: SuperTabs) {}

  segmentChanged(ev: any) {
    console.log("Segment changed", ev);
  }
  ngOnInit() {}

  viewall() {
    this.st.selectTab(2);
  }
}
