import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToSubComponent } from './parent-to-sub.component';

describe('ParentToSubComponent', () => {
  let component: ParentToSubComponent;
  let fixture: ComponentFixture<ParentToSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentToSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentToSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
