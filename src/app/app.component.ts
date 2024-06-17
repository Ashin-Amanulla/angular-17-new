import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './ui/button/button.component';
import { CardComponent } from './components/card/card.component';
import { MyHostComponent } from './components/my-host/my-host.component';
import { MyLifecycleComponent } from './components/my-lifecycle/my-lifecycle.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSlideToggleModule,MatButtonModule, ButtonComponent,CardComponent,MyHostComponent,MyLifecycleComponent,MyCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'day2';
  parentData = 'Initial data';
  onclicked() {
    alert("Hello")
  }
  updateData() {
    this.parentData = 'Updated data at ' + new Date();
  }
}
