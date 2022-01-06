class CreateMovie < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.text :summary, null: false
      t.integer :length, null: false
      t.string :rating, null: false
      t.timestamps
      t.index :title
    end
  end
end
