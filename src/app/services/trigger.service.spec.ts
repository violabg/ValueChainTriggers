/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TriggerService } from './trigger.service';

describe('Service: Trigger', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriggerService]
    });
  });

  it('should ...', inject([TriggerService], (service: TriggerService) => {
    expect(service).toBeTruthy();
  }));
});
