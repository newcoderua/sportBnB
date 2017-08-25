class Api::BuddiesController < ApplicationController
  def index
    buddies =  Buddy.all

    if params[:filters]

      filters = params[:filters]

      if filters[:sport] != "0" && filters[:sport] != "any"
        buddies = buddies.where(sport: filters[:sport])
      end

      if filters[:minRate] != "zero"
        buddies = buddies.where("rate >= ?", filters[:minRate].to_i)
      end

      if filters[:maxRate]
        buddies = buddies.where("rate < ?", filters[:maxRate].to_i)
      end

      if filters[:zip] && filters[:zip].to_i != 0
        buddies = buddies.where(zip: params[:zip].to_i)
      end

    end
    @buddies = buddies

    render :index
  end

  def show
    @chef = Buddy.find(params[:id])
  end

  # def search
  #   if params[:query].present?
  #     @buddies = Buddy.where('username ~ ?', params[:query])
  #   else
  #     @buddies = Buddy.none
  #   end
  #
  #   respond_to do |format|
  #     format.html { render :search }
  #     format.json { render :search }
  #   end
  # end

  private

  def buddy_params
    params.require(:buddy).permit(:name, :sport, :best_achievement, :zip)
  end
end
