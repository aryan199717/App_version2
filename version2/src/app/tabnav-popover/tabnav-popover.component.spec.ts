import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { TabnavPopoverComponent } from "./tabnav-popover.component";

describe("TabnavPopoverComponent", () => {
  let component: TabnavPopoverComponent;
  let fixture: ComponentFixture<TabnavPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabnavPopoverComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TabnavPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
