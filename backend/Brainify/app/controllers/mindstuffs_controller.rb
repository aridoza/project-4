class MindstuffsController < ApplicationController
  def index
    render json: Mindstuff.all, status: 200
  end
end
