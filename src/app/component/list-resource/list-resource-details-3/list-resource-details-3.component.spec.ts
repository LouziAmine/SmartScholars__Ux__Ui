import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourceDetails3Component } from './list-resource-details-3.component';

describe('ListResourceDetails3Component', () => {
  let component: ListResourceDetails3Component;
  let fixture: ComponentFixture<ListResourceDetails3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListResourceDetails3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResourceDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
