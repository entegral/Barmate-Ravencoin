require('sinatra')
require('./lib/BitcoinRPC')

get ('/') do
  "Docker container and sinatra are set up!"
end

get ('/status') do
  query = BitcoinRPC.new('http://user1:titties1@172.19.0.2:8766')
  @rvn_network_info = query.getnetworkinfo
  @rvn_wallet_info = query.getbalance
  @rvn_blockchain_info = query.getblockchaininfo
  @rvn_mining_info =  query.getmininginfo
  @rvn_mempool_info = query.getmempoolinfo
  @new_rvn_address = query.getnewaddress
  @list_my_assets = query.listmyassets
  @get_account_addresses = query.getaddressesbyaccount("")
  erb(:status)
end

post ('/sendAsset') do
  query = BitcoinRPC.new('http://user1:titties1@172.19.0.2:8766')
  receipient = params.fetch('receipient')
  ammount = params.fetch('ammount').to_f
  asset_name = params.fetch('assetName')
  query.sendassettoaddress(receipient, asset_name, ammount)
  "Congrats, #{ammount} #{asset_name} was sent to #{receipient}"
end
