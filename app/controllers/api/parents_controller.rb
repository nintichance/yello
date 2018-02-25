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
        @buses = @parent.buses
        @trips = @parent.trips
        @data = {parent: @parent, buses: @buses, trips: @trips}
        render json: @data
    end
    def update
        @parent = Parent.find(params[:id])
        @parent.update!(parent_params)

        render json: @parent
    end
    def destroy
        @parent = Parent.find(params[:id]).delete

        render status: :ok
    end
    def parent_params
        params.require(:parent).permit(:lat, :lng, :address, :img, :driver, :description)
    end
end
# class Api::InvestmentsController < ApplicationController
#     def index
#         @user = User.find(params[:user_id])
#         @investments = @user.investments
#         @portfolios = @user.portfolios
#         @data = {user: @user, investments: @investments, portfolios: @portfolios}

#         render json: @data
#     end

#     def show
#         @investment = User.find(params[:user_id]).investments.find(params[:id])
#         render json: @investment
#     end

#     def create
#         @user = User.find(params[:user_id])
#         @investment = Investment.create!(investment_params)
#         @user.investments << @investment
        
#         render json: @user
#     end
    
#     def destroy
#         @investment = User.find(params[:user_id]).investments.find(params[:id])
#         @investment.destroy
#         render json: @investment
#     end

#     def update
#         @investment = User.find(params[:user_id]).investments.find(params[:id])
#         @investment.update!(investment_params)
#         render json: @investment
#     end

#     private
#     def investment_params
#         params.require(:investment).permit(:ticker, :category)
#     end
# end