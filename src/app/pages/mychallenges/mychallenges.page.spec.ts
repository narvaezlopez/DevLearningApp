import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MychallengesPage } from './mychallenges.page';

describe('MychallengesPage', () => {
  let component: MychallengesPage;
  let fixture: ComponentFixture<MychallengesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MychallengesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MychallengesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
