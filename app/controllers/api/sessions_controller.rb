module Api
    class SessionsController < ApplicationController    
        def create
            # Get User first through username
            @user = User.find_by(username: user_params[:username])

            #Decryption 
            if @user and BCrypt::Password.new(@user.password) == user_params[:password]
                @session = @user.sessions.create
                cookies.permanent.signed[:twitter_session_token] = {
                    value: @session.token,
                    httponly: true
                }
                render json: {
                    sucess: true
                }
            else 
                render json: {
                    success: false
                }
            end
        end

        def authenticated 
            @token = cookies.permanent.signed[:twitter_session_token]
            @session = Session.find_by(token: @token)

            if session 
                @user = @session.user
                render json: {
                    authenticated: true,
                    username: @user.username
                }
            else 
                render json: {
                    authenticated: false
                }

            end
        end
        
        def destroy 
            @token = cookies.permanent.signed[:twitter_session_token]
            @session = Session.find_by(token: @token)

            if @session and @session.destroy 
                cookies.delete :twitter_session_token
                render json: {
                    success: true
                }
            else
                render json: {
                    success: false
                }
            end
        end


        private 
            def user_params
                params.require(:user).permit(:username,:password)
            end
    end
end