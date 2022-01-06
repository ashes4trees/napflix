class Genre < ApplicationRecord
    validates :genre, presence: true

    has_many :tags,
        primary_key: :id,
        foreign_key: :genre_id,
        class_name: :Tag 

    has_many :movies,
        through: :tags

end