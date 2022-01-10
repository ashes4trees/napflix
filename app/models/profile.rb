class Profile < ApplicationRecord
    validates :name, :user_id, presence: true
    validates :name, uniqueness: {scope: :user}

    has_many :list_items,
        primary_key: :id, 
        foreign_key: :profile_id,
        class_name: :List

    belongs_to :user,
        primary_key: :id, 
        foreign_key: :user_id,
        class_name: :User

   
end