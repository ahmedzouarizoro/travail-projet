import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  links = [
    {name :'Acceuil'},
     {name :'Profile'},
      {name :'Conference'},
       {name :'details'},
        {name :'amis'},
    {name :'notifications'}
  ]

}
