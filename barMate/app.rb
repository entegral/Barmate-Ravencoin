require('sinatra')
require('./lib/BitcoinRPC')

get ('/') do
  "Docker container and sinatra are set up!"
end

get ('/status') do
  query = BitcoinRPC.new('http://brucer:tenderTesticles@172.19.0.2:8766')
  @rvn_network_info = query.getnetworkinfo
  @rvn_wallet_info = query.getbalance
  @rvn_blockchain_info = query.getblockchaininfo
  @rvn_mining_info =  query.getmininginfo
  @rvn_mempool_info = query.getmempoolinfo
  erb(:status)
end