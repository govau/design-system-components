import { TestBed, inject } from '@angular/core/testing';

import { UiKitCoreService } from './ui-kit-core.service';

describe('UiKitCoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiKitCoreService]
    });
  });

  it('should be created', inject([UiKitCoreService], (service: UiKitCoreService) => {
    expect(service).toBeTruthy();
  }));
});
