import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/nav-bar/nav-bar';
import { Friendslist } from './components/friendslist/friendslist';
import { Profile } from './components/profile/profile';
import { Notifications } from './components/notifications/notifications';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, NavBar, Friendslist, Profile, Notifications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projetangular');
}
