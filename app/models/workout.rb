# == Schema Information
#
# Table name: workouts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  buddy_id   :integer
#  address    :string           not null
#  sport      :string           not null
#  date       :date             not null
#  details    :text
#  paid       :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  completed  :boolean          default(FALSE)
#

class Workout < ApplicationRecord
  validates :user_id, :address, :sport, :date, presence: true

  belongs_to :user
end
