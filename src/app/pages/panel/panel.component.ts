import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatExpansionModule} from '@angular/material/expansion';

import {MatListModule} from '@angular/material/list';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [MatListModule,MatExpansionModule,MatSidenavModule,RouterModule,MatIconModule,MatButtonModule,MatToolbarModule,RouterLink],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

}
