class CreateList < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.integer :profile_id, null: false
      t.integer :movie_id, null: false
      t.timestamps
    end
  end
end
