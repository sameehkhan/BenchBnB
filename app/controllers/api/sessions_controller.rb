class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      redirect_to root_url
    else
      render json: ["Invalid credentials"], status: 401
      redirect_to new_session_url
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["Not logged in"], status: 404
    end
  end
end
