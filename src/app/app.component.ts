import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './pages/panel/panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-01angular';
}
