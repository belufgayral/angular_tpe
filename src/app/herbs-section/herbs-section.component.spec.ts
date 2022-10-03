import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbsSectionComponent } from './herbs-section.component';

describe('HerbsSectionComponent', () => {
  let component: HerbsSectionComponent;
  let fixture: ComponentFixture<HerbsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerbsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerbsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
