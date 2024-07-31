import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conteneur2Component } from './conteneur-2.component';

describe('Conteneur2Component', () => {
  let component: Conteneur2Component;
  let fixture: ComponentFixture<Conteneur2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Conteneur2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conteneur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
