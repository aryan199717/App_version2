import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecognitionPage } from './recognition.page';

describe('RecognitionPage', () => {
  let component: RecognitionPage;
  let fixture: ComponentFixture<RecognitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecognitionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecognitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
