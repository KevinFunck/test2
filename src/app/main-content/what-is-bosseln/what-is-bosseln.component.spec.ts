import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsBosselnComponent } from './what-is-bosseln.component';

describe('WhatIsBosselnComponent', () => {
  let component: WhatIsBosselnComponent;
  let fixture: ComponentFixture<WhatIsBosselnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsBosselnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatIsBosselnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
