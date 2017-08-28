class RemoveCompletedWorkoutToWorkouts < ActiveRecord::Migration[5.1]
  def change
    remove_column :workouts, :completed_workout, :boolean, default: false
  end
end
