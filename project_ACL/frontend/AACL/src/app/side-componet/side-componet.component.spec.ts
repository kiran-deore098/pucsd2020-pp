import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideComponetComponent } from './side-componet.component';

describe('SideComponetComponent', () => {
  let component: SideComponetComponent;
  let fixture: ComponentFixture<SideComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
