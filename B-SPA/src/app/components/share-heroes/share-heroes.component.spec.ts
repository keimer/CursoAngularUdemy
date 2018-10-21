import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareHeroesComponent } from './share-heroes.component';

describe('ShareHeroesComponent', () => {
  let component: ShareHeroesComponent;
  let fixture: ComponentFixture<ShareHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
