module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    sagano: {
      host: "127.0.0.1",
      port: 8546,
      network_id: "*",
			from: "0x8fb9ed1d0a677e0f141699dfc4eedad68432a5fb",
			gas: 6721975,
    },
    pottery: {
      host: "172.18.0.2",
      port: 8546,
      network_id: "*",
      from: "0x42a71e1dfa96cd0652028fa0c09e7dddf129ec49",
      gas: 6721975,
    }
  }
};
