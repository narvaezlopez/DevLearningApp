import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvancesPage } from './advances.page';

describe('AdvancesPage', () => {
  let component: AdvancesPage;
  let fixture: ComponentFixture<AdvancesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
