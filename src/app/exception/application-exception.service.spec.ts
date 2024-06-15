import { TestBed } from '@angular/core/testing';

import { ApplicationException } from './application-exception.service';

describe('ApplicationExceptionService', () => {
  let service: ApplicationException;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationException);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
