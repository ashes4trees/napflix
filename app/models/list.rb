class List < ApplicationRecord
    validates :profile_id, :movie_id, presence: true

    belongs_to :profile,
        primary_key: :id, 
        foreign_key: :profile_id,
        class_name: :Profile

end