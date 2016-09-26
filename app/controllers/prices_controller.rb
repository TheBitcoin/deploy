class PricesController < ApplicationController

  def index

  end

  def show
    price = Btcusd.order('created_at ASC').last
    render json: price
  end
end
