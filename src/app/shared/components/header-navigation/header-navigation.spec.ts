import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavigationComponent} from './header-navigation.component';

describe('HeaderNavigation', () => {
  let component: HeaderNavigationComponent;
  let fixture: ComponentFixture<HeaderNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
