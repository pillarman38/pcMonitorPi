import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RamComponent } from './ram/ram.component';
import { CpuComponent } from './cpu/cpu.component';
import { GpuComponent } from './gpu/gpu.component';
import { NetworkComponent } from './network/network.component';
import { HomeComponent } from './home/home.component';

var appRoutes = [
  {path: "cpu", component: CpuComponent},
  {path: "ram", component: RamComponent},
  {path: "gpu", component: GpuComponent},
  {path: "network", component: NetworkComponent},
  {path: "home", component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RamComponent,
    CpuComponent,
    GpuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
