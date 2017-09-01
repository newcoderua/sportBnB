class Api::ReservationsController < ApplicationController

  def index
    reservations = Reservation.all

    # debugger
    if (current_user && (current_user.buddy_id === nil))
      reservations = reservations.where(user_id: current_user.id)
    else

      reservations = reservations.where(buddy_id: current_user.buddy_id)
    end
    # debugger
    @reservations = reservations.reverse
  end

  def create
    # debugger
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id
    # debugger
    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def show
    @reservation = Reservation.find(params[:id])
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    if @reservation
      @reservation.destroy
      render :show
    else
      render json: { messsage: "Invalid reservation" }, status: 404
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :buddy_id, :address, :date, :status, :details, :paid)
  end
end
