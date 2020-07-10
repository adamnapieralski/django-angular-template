import { TestBed } from '@angular/core/testing';

import { MonitoringDataService } from './monitoring-data.service';

describe('MonitoringDataService', () => {
  let service: MonitoringDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
