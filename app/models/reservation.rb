class Reservation < ApplicationRecord
  validates :user_id, :buddy_id, :address, :date, presence: true

  belongs_to :user
  belongs_to :buddy
end
