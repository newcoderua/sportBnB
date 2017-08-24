class Api::BuddysController < ApplicationController
  def index
    debugger
    @buddies = Buddy.all
    render :index
  end

  def show
    @chef = Buddy.find(params[:id])
  end

  def search
    if params[:query].present?
      @buddies = Buddy.where('username ~ ?', params[:query])
    else
      @buddies = Buddy.none
    end

    respond_to do |format|
      format.html { render :search }
      format.json { render :search }
    end
  end

  private

  def buddy_params
    params.require(:buddy).permit(:name, :sport, :best_achievement)
  end
end
