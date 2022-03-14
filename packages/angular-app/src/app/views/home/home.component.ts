import { Component, OnInit } from '@angular/core';
// import { ethers } from "ethers";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  purpose = this.useContractReader();
  // localbalance = ethers.utils.formatEther(yourLocalBalance);

  constructor() { }

  ngOnInit(): void {
  }

  useContractReader() {
    return "the reader"
  }

}
