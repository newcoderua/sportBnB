class Api::BuddiesController < ApplicationController
  def index
    buddies =  Buddy.all

    if params[:filters]

      filters = params[:filters]
      # debugger
      if filters[:sport] != "0" && filters[:sport] != "any"
        buddies = buddies.where(sport: filters[:sport])
      end

      if filters[:minRate] != "zero"
        buddies = buddies.where("rate >= ?", filters[:minRate].to_i)
      end

      if filters[:maxRate]
        buddies = buddies.where("rate < ?", filters[:maxRate].to_i)
      end

      # debugger
      if filters[:zip] == "10001" || filters[:zip] == "94016"
        buddies = buddies.where(zip: filters[:zip].to_i)
      end

    end
    # debugger
    @buddies = buddies

    render :index
  end

  def show
    # debugger
    @buddy = Buddy.find(params[:id])
  end

  def update
    @buddy = Buddy.find_by_id(params[:id])

    if @buddy.update(buddy_params)
      render :show
    else
      render json: { message: "Invalid params for image", status: 404}
    end
  end

  def create
    @buddy = Buddy.new(buddy_params)
    #later I need to fix it, so I can create buddy only once
    # debugger

    # current_user.buddy = true
    if @buddy.valid? && current_user.valid?
      @buddy.save!
      current_user.buddy_id = @buddy.id
      # debugger
      current_user.image_url = @buddy.image_url
      current_user.save!
    # 99 cats solution , approving car rental request
      render :show
    else
      render json: @buddy.errors.full_messages, status: 422
    end

  end

  private

  def buddy_params
    params.require(:buddy).permit(:name, :sport, :best_achievement, :zip, :rate, :image_url, :avatar)
  end
end
