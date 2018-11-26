require('sinatra')
require('./lib/BitcoinRPC')


get ('/') do
  query = BitcoinRPC.new('http://brucer:tenderTesticles@172.19.0.2:8766')
  @rvn_network_info = query.getnetworkinfo
  @rvn_wallet_info = query.getbalance
  @rvn_blockchain_info = query.getblockchaininfo
  @rvn_mining_info =  query.getmininginfo
  @rvn_mempool_info = query.getmempoolinfo
  # @new_rvn_address = query.getnewaddress
  if @rvn_mining_info['blocks'].to_i > 435456
    @list_my_assets = query.listmyassets
  end
  @get_account_addresses = query.getaddressesbyaccount("")
  erb(:status)
end

post ('/sendRaven') do
  query = BitcoinRPC.new('http://brucer:tenderTesticles@172.19.0.2:8766')
  receipient = params.fetch('receipient')
  ammount = params.fetch('ammount')
  query.sendtoaddress(receipient,ammount.to_i)
  "Congrats, #{ammount} Raven was sent to #{receipient}."
end

post ('/sendAsset') do
  query = BitcoinRPC.new('http://brucer:tenderTesticles@172.19.0.2:8766')
  receipient = params.fetch('receipient')
  ammount = params.fetch('ammount')
  asset_name = params.fetch('assetName')
  query.transfer(asset_name, ammount.to_f, receipient)
  "Congrats, #{ammount} #{asset_name} was sent to #{receipient}."
end

get ('/update') do
  # Once we have a database to work with, look up the account name that the tx was sent to and update their info with the new data.

  @incoming_transaction = params['tx']

end
