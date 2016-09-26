class GetApiStampJob < ApplicationJob
  queue_as :default

  def perform(*args)
    response = HTTParty.get('https://www.bitstamp.net/api/v2/ticker/btcusd/')
    byebug
  end




end
