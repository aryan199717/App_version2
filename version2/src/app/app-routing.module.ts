import { AuthGuardService } from "./services/auth-guard.service";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "intro",
    pathMatch: "full",
  },
  {
    path: "intro",
    loadChildren: () =>
      import("./intro/intro.module").then((m) => m.IntroPageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardPageModule),
  },
  {
    path: "tabnav",
    loadChildren: () =>
      import("./tabnav/tabnav.module").then((m) => m.TabnavPageModule),
  },
  {
    path: "teams",
    loadChildren: () =>
      import("./teams/teams.module").then((m) => m.TeamsPageModule),
  },
  {
    path: "support",
    loadChildren: () =>
      import("./support/support.module").then((m) => m.SupportPageModule),
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountPageModule),
  },
  {
    path: "recognition",
    loadChildren: () =>
      import("./recognition/recognition.module").then(
        (m) => m.RecognitionPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
