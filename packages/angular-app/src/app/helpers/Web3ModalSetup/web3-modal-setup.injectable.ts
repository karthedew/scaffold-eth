import { InjectionToken } from "@angular/core";
import { ethers, providers } from "ethers";

require("dotenv").config()

const EthersProvider = new InjectionToken<providers.Web3Provider>('Ethers Connected', {
    providedIn: 'root',
    factory: () => {
        const ethersProvider = new ethers.providers.Web3Provider((window as any).ethereum);
        return ethersProvider
    }
})



export { EthersProvider }