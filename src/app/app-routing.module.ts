import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routers: Routes = [
  { path: 'timer', component: TimerComponent },
  { path: 'report', component: BarGraphComponent },
  { path: 'teams', component: PieChartComponent },
  { path: 'client', component: BarGraphComponent },
  { path: 'project', component: PieChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
