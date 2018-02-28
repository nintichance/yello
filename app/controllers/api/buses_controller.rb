class Api::BusesController < ApplicationController
    def index
        @buses = Bus.all
        render json: @buses
    end
    def create
        @bus = Bus.create! (bus_params)
        render json: @bus
    end
    def show
        @bus = Bus.find(params[:id])
        render json: @bus
    end
    def update
        @bus = Bus.find(params[:id])
        @bus.update!(bus_params)

        render json: @bus
    end
    def destroy
        @bus = Bus.find(params[:id]).delete

        render status: :ok
    end
    def bus_params
        params.require(:bus).permit(:lat, :lng, :address, :img, :driver, :description)
    end
end

