class CreateBtcusds < ActiveRecord::Migration[5.0]
  def change
    create_table :btcusds do |t |
      t.float :high
      t.float :last
      t.float :bid
      t.integer :timestamp
      t.float :vwap
      t.float :volume
      t.float :low
      t.float :ask
      t.float :open
      t.timestamps
    end
  end
end
