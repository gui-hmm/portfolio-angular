import { Component } from '@angular/core';
import { TitleCardComponent } from "../title-card/title-card.component";
import { NavigationComponent } from "../navigation/navigation.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [TitleCardComponent, NavigationComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
