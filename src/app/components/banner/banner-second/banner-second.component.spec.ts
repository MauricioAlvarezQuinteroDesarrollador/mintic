import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSecondComponent } from './banner-second.component';

describe('BannerSecondComponent', () => {
  let component: BannerSecondComponent;
  let fixture: ComponentFixture<BannerSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerSecondComponent]
    });
    fixture = TestBed.createComponent(BannerSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
