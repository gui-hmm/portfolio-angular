import { Component } from '@angular/core';
import { TitleCardComponent } from "../title-card/title-card.component";
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-header',
  imports: [TitleCardComponent, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
