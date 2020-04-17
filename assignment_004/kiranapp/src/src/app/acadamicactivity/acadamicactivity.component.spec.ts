import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadamicactivityComponent } from './acadamicactivity.component';

describe('AcadamicactivityComponent', () => {
  let component: AcadamicactivityComponent;
  let fixture: ComponentFixture<AcadamicactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcadamicactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadamicactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
