import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteThemeComponent } from './website-theme.component';

describe('WebsiteThemeComponent', () => {
  let component: WebsiteThemeComponent;
  let fixture: ComponentFixture<WebsiteThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteThemeComponent]
    });
    fixture = TestBed.createComponent(WebsiteThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
