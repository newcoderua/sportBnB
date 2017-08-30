# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  buddy_id   :integer          not null
#  address    :string           not null
#  date       :date             not null
#  status     :string
#  details    :text
#  paid       :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Reservation < ApplicationRecord
  validates :user_id, :buddy_id, :address, :date, presence: true

  belongs_to :user
  belongs_to :buddy
end
