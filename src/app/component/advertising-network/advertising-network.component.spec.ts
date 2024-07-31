import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingNetworkComponent } from './advertising-network.component';

describe('AdvertisingNetworkComponent', () => {
  let component: AdvertisingNetworkComponent;
  let fixture: ComponentFixture<AdvertisingNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvertisingNetworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisingNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
