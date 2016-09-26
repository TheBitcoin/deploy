s = Rufus::Scheduler.singleton
s.every '1s' do
  Btcusd.getprice
end
