import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ErrorComponent } from "./components/error/error.component";
import { FindAgentComponent } from "./components/findAgent/findAgent.component";
import { FindPropertyComponent } from "./components/findProperty/findProperty.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { AuthGuard } from "./guards/authGuard";

const routes:Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'findAgent', component: FindAgentComponent , canActivate: [AuthGuard]},
  {path: 'findProperty', component: FindPropertyComponent , canActivate: [AuthGuard]},
  {path: '', redirectTo:'/homepage', pathMatch:'full'},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
