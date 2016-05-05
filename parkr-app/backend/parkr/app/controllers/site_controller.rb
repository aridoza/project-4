class SiteController < ApplicationController
  def index
    render json: Parking.all, status: 200 
  end
end
