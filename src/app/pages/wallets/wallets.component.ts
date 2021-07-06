import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  selectedWalletType = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  changeWalletType(type) {
    this.selectedWalletType = type;
  }

}
