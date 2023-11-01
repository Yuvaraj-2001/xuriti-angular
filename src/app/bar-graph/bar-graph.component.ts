import { Component, ViewChild, OnInit , ElementRef} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { UttilityService } from '../uttility.service';


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {
  @ViewChild('barGraph') public chartEl!: ElementRef;

  constructor(private hcs: UttilityService){}
  ngOnInit(): void {
   
    
  }

  ngAfterViewInit(): void {
    this.hcs.createChart(this.chartEl.nativeElement, true);
  }
}
