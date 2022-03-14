import { Component, OnInit } from '@angular/core';
import { Web3ModalSetupService } from "../../helpers/Web3ModalSetup/web3-modal-setup.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public isConnected: boolean = false;

  constructor(
    private web3ModalSetupService: Web3ModalSetupService
  ) { }

  ngOnInit(): void {
  }

  async connectWeb3Modal() {
    console.log('You are in connectWeb3Modal()')
    try {
      await this.web3ModalSetupService.connectAccount();
    } catch (error) {
      alert('Did not connect')
    }
    this.isConnected = true;
  }

}
