class Movie < ApplicationRecord
    validates :title, :year, :summary, :length, :rating, presence: true
    validates :rating, inclusion: {in: ['G', 'PG', 'PG-13', 'R', 'NC-17', 'NR']}

    has_one_attached :photo
    has_one_attached :video


end