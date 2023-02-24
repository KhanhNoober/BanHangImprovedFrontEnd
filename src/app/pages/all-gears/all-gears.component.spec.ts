import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGearsComponent } from './all-gears.component';

describe('AllGearsComponent', () => {
  let component: AllGearsComponent;
  let fixture: ComponentFixture<AllGearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGearsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllGearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
