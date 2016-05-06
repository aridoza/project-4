class ParkingsController < SiteController
  respond_to :html, :xml, :json
  def index
    render json: Parking.all, status: 200
  end

  def create
    respond_with Parking.create(parking_params)
  end

  def destroy
    respond_with Parking.destroy(params[:id])
  end

  def update
    parking = Parking.find(params[:id])
    parking.update_attributes(parking_params)
    respond_with parking, json: parking
  end

  private

  def parking_params
    params.require(:parking).permit(:id, :date, :time, :car_type, :description)
  end
end
