import { PopoverController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabnav-popover",
  templateUrl: "./tabnav-popover.component.html",
  styleUrls: ["./tabnav-popover.component.scss"],
})
export class TabnavPopoverComponent implements OnInit {
  constructor(public popovercontroller: PopoverController) {}

  ngOnInit() {}

  close() {
    this.popovercontroller.dismiss();
  }
}
