import { Component } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent {
  activeTab = 0;

  constructor() { }

  ngOnInit() { }

  onTabClick(index: number) {
    this.activeTab = index;
  }
}
