//const HDWalletProvider = require('@truffle/hdwallet-provider')
module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    sagano: {
//			provider: () => new HDWalletProvider("base naive animal bacon blanket glance matter meadow unit start better pole", "http://localhost:28569"),
//			network_id: "*",
      host: "127.0.0.1",
      port: 8546,
      network_id: "*",
			//from: "0xabaa573e1ca26bc44e1c7313fdedcf9f32c4f424",
			//from: "0x99f4e3E4C0aDe3b687730DF38440a29771C9b7d0",
			from: "0x8fb9ed1d0a677e0f141699dfc4eedad68432a5fb",
			gas: 5500000,
    },
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  }
  }
  //
};
