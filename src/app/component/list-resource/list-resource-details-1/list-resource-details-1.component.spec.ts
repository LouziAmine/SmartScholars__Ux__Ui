import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourceDetails1Component } from './list-resource-details-1.component';

describe('ListResourceDetails1Component', () => {
  let component: ListResourceDetails1Component;
  let fixture: ComponentFixture<ListResourceDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListResourceDetails1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResourceDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
