import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubToParentComponent } from './sub-to-parent.component';

describe('SubToParentComponent', () => {
  let component: SubToParentComponent;
  let fixture: ComponentFixture<SubToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubToParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
