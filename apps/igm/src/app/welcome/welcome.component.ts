import { Component, ElementRef, ViewChild } from '@angular/core';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'igm-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  @ViewChild(RegisterComponent, { read: ElementRef })
  registerContainer: ElementRef;

  scrollDown(): void {
    this.registerContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
