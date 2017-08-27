class Workout < ApplicationRecord
  validates :user_id, :address, :sport, :date, presence: true

  belongs_to :user
end
