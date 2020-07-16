import { TabnavPopoverComponent } from "./../tabnav-popover/tabnav-popover.component";
import { AccountPageModule } from "./../account/account.module";
import { SupportPageModule } from "./../support/support.module";
import { TeamsPageModule } from "./../teams/teams.module";
import { DashboardPageModule } from "./../dashboard/dashboard.module";
import { SuperTabsModule } from "@ionic-super-tabs/angular";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TabnavPageRoutingModule } from "./tabnav-routing.module";

import { TabnavPage } from "./tabnav.page";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabnavPageRoutingModule,
    SuperTabsModule,
    RouterModule.forChild([
      {
        path: "",
        component: TabnavPage,
      },
    ]),
    DashboardPageModule,
    TeamsPageModule,
    SupportPageModule,
    AccountPageModule,
  ],
  entryComponents: [TabnavPopoverComponent],
  declarations: [TabnavPage, TabnavPopoverComponent],
})
export class TabnavPageModule {}
