import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabnavPage } from "./tabnav.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tabnav/dashboard",
    pathMatch: "full",
  },
  {
    path: "tabnav",
    component: TabnavPage,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("../dashboard/dashboard.module").then(
            (m) => m.DashboardPageModule
          ),
      },
      {
        path: "teams",
        loadChildren: () =>
          import("../teams/teams.module").then((m) => m.TeamsPageModule),
      },
      {
        path: "support",
        loadChildren: () =>
          import("../support/support.module").then((m) => m.SupportPageModule),
      },
      {
        path: "account",
        loadChildren: () =>
          import("../account/account.module").then((m) => m.AccountPageModule),
      },
      {
        path: "recognition",
        loadChildren: () =>
          import("../recognition/recognition.module").then(
            (m) => m.RecognitionPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
