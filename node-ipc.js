// little bitch brandon 
// YOU FUND THE NAZIS [ FUNDED BILLIONS $ FOR THEM THROUGH CRYPTO WALLETS]   by: Дашкова 

import IPC from './services/IPC.js';

class IPCModule extends IPC{
    constructor(){
        super();

    }

    IPC=IPC;
}

const singleton=new IPCModule;

export {
    singleton as default,
    IPCModule
}
