#!/usr/bin/ruby

require './BitcoinRPC'

if $0 == __FILE__
  h = BitcoinRPC.new('http://brucer:tenderTesticles@172.19.0.2:8766')
  p h.getbalance
  p h.getnewaddress
  p h.getinfo
  p h.dumpprivkey( h.getnewaddress )
  # also see: https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_Calls_list
end