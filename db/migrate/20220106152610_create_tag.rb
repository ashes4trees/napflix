class CreateTag < ActiveRecord::Migration[6.1]
  def change
    create_table :tags do |t|
      t.integer :genre_id, null: false
      t.integer :movie_id, null: false
      t.index [:movie_id, :genre_id], unique: true
      t.timestamps
    end
  end
end
