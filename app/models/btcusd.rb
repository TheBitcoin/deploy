class Btcusd < ApplicationRecord
  def self.getprice
    response = HTTParty.get('https://www.bitstamp.net/api/ticker/')
    puts response['last']
    new = Btcusd.create(
        high:response['high'],
        last: response['last'],
        bid: response['bid'],
        timestamp: response['timestamp'],
        vwap: response['vwap'],
        volume: response['volume'],
        low: response['low'],
        ask: response['ask'],
        open: response['open']
        )
  end
end
