import { Component, OnInit } from '@angular/core';
import { MonitoringDataService } from '../monitoring-data.service'
import { SingleData } from '../single-data';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: SingleData = {
    id: 0,
    used_space: 0,
    free_space: 0
  };

  dataCounter = interval(1500).subscribe(
    _ => this.getData()
  );

  constructor(private monitoringDataService: MonitoringDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.monitoringDataService.getData()
      .subscribe(data => this.data = data);
  }
}
