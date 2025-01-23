import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLineComponent } from './navigation-line.component';

describe('NavigationLineComponent', () => {
  let component: NavigationLineComponent;
  let fixture: ComponentFixture<NavigationLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
