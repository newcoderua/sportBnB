class Api::WorkoutsController < ApplicationController

  def index
    workouts = Workout.all
    if(current_user)
      workouts = workouts.where(user_id: current_user.id)
    end
    # debugger
    @workouts = workouts.reverse
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user_id = current_user.id

    if @workout.save
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def show
    @workout = Workout.find(params[:id])
  end

  def destroy
    # debugger
    @workout = Workout.find(params[:id])
    if @workout
      @workout.destroy
      render :show
    else
      render json: { message: "Invalid reservation", status: 404 }
    end

  end

  private

  def workout_params
    params.require(:workout).permit(:user_id, :address, :sport, :date, :completed, :details)
  end
end
