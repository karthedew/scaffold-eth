import { Component, OnInit } from '@angular/core';
import { IconDefinition, IconService } from '@ant-design/icons-angular';
import { AccountBookFill, WalletOutline } from '@ant-design/icons-angular/icons'

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor(
    private iconService: IconService
  ) {
    this.iconService.addIcon(...[ WalletOutline ]);
    this.iconService.twoToneColor = { primaryColor: '#1890ff' };
  }

  ngOnInit(): void {
  }

}
