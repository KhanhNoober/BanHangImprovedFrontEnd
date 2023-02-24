import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGearComponent } from './add-gear.component';

describe('AddGearComponent', () => {
  let component: AddGearComponent;
  let fixture: ComponentFixture<AddGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
