class List < ApplicationRecord
    validates :profile_id, :movie_id, presence: true
    validates :profile_id, uniqueness: {scope: :movie_id}

    belongs_to :profile,
        primary_key: :id, 
        foreign_key: :profile_id,
        class_name: :Profile

end