import { TestBed, inject } from '@angular/core/testing';

import { ServiceMooviesService } from './service-moovies.service';

describe('ServiceMooviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceMooviesService]
    });
  });

  it('should be created', inject([ServiceMooviesService], (service: ServiceMooviesService) => {
    expect(service).toBeTruthy();
  }));
});
