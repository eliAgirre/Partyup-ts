import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePartiesComponent } from './favorite-parties.component';

describe('FavoritePartiesComponent', () => {
  let component: FavoritePartiesComponent;
  let fixture: ComponentFixture<FavoritePartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
