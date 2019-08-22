import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DeptComponent } from "./dept/dept.component";

const routes: Routes = [{ path: "", component: DeptComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponent = [DeptComponent];
