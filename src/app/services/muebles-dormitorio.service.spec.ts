import { TestBed } from '@angular/core/testing';

import { MueblesDormitorioService } from './muebles-dormitorio.service';

describe('MueblesDormitorioService', () => {
  let service: MueblesDormitorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MueblesDormitorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
