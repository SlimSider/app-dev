import {Component, OnInit} from '@angular/core';
import {Role} from "../../model/User";
import {AuthService} from "../../services/auth.service";

interface MenuItem {
  link: String;
  title: String;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private common: MenuItem[] = [
    {link: '/help', title: 'Help'},
    {link: '/match', title: 'Matches'}
  ];

  private roleMenus = new Map<Role, MenuItem[]>([
    [Role.GUEST, [...this.common]],
    [Role.USER, [...this.common]],
    [Role.ADMIN, [...this.common, {link: '/user', title: 'Users'}]]
  ]);

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  update() {
    if (this.authService.isLoggedIn) {
      this.common = this.roleMenus.get(this.authService.user.role);
    } else {
      this.common = this.roleMenus.get(Role.GUEST)
    }
  }

  logout() {
    this.authService.logout();
  }
}
