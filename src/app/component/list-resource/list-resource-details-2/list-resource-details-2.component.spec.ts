import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourceDetails2Component } from './list-resource-details-2.component';

describe('ListResourceDetails2Component', () => {
  let component: ListResourceDetails2Component;
  let fixture: ComponentFixture<ListResourceDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListResourceDetails2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResourceDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
