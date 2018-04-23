class Api::ParentsController < ApplicationController
    def index
        @parents = Parent.all
        render json: @parents
    end
    def create
        @parent = Parent.create! (parent_params)
        render json: @parent
    end
    def show
        @parent = Parent.find(params[:id])
        render json: @parent
    end
    def update
        @parent = Parent.find(params[:id])
        @parent.update!(parent_params)

        render json: @parent
    end

    def add_bus
        @parent = Parent.find(params[:parent_id])
        @bus = Bus.find(params[:id])
        @parent.buses << @bus
    end

    def destroy
        @parent = Parent.find(params[:id]).destroy

        render status: :ok
    end
    def retrieve
        @existing_parent = Parent.where(username: params[:username])
        puts @existing_parent
        render json: @existing_parent
    end    
    def parent_params
        params.require(:parent).permit(:name, :lat, :lng, :address, :img, :username)
    end
end
