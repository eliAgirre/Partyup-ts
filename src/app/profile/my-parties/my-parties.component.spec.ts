import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPartiesComponent } from './my-parties.component';

describe('MyPartiesComponent', () => {
  let component: MyPartiesComponent;
  let fixture: ComponentFixture<MyPartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
