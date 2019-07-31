import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPro';
  text = 'Marvellous Infosystems';
  public fun(): void
  {
    this.text = 'MARVELLOUS INFOSYSTEMS';
  }

  public fun1(): void
  {
    this.text = 'marvellous infosystems';
  }
}
