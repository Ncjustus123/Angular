import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponent } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, routingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
