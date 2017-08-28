class AddCompletedWorkoutToWorkouts < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :completed_workout, :boolean
  end
end
