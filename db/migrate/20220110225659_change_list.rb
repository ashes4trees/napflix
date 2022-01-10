class ChangeList < ActiveRecord::Migration[6.1]
  def change
    add_index :lists, [:profile_id, :movie_id]
  end
end
