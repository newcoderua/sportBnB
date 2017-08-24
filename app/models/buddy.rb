# == Schema Information
#
# Table name: buddies
#
#  id               :integer          not null, primary key
#  name             :string           not null
#  sport            :string           not null
#  zip              :integer
#  rate             :integer
#  best_achievement :text             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  image_url        :string
#

class Buddy < ApplicationRecord
  validates :name, :sport, :best_achievement, presence: true

  has_many :feedbacks
  has_many :reservations

  
end
