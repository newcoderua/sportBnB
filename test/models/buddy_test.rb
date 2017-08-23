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
#

require 'test_helper'

class BuddyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
