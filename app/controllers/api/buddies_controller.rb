class Api::BuddiesController < ApplicationController
  def index
    buddies =  Buddy.all
    if params[:sport] && params[:sport].to_i != 0
      buddies = buddies.where(sport: params[:sport].to_i)
    end
    if params[:minRate]
      buddies = buddies.where("rate >= ?", params[:minRate].to_i)
    end
    if params[:maxRate]
      buddies = buddies.where("rate <= ?", params[:maxRate].to_i)
    end
    if params[:zip] && params[:zip].to_i != 0
      buddies = buddies.where(zip: params[:zip].to_i)
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
