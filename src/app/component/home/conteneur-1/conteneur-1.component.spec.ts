import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conteneur1Component } from './conteneur-1.component';

describe('Conteneur1Component', () => {
  let component: Conteneur1Component;
  let fixture: ComponentFixture<Conteneur1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Conteneur1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conteneur1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
