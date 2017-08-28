class AddCompletedToWorkouts < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :completed, :boolean, default: false
  end
end
