import { TestBed } from '@angular/core/testing';

import { WebsoketServiceService } from './websoket-service.service';

describe('WebsoketServiceService', () => {
  let service: WebsoketServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsoketServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
