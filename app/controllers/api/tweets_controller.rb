module Api
    class TweetsController < ApplicationController
        def index 
                @tweets = Tweet.all.order(created_at: :desc)
                render 'api/tweets/index'
        end

        def index_by_user
                user = User.find_by(username: params[:username])
                if user
                    @tweets = user.tweets
                    render 'api/tweets/index'
                else
                    render json: {
                        success: false
                    }
                end
        end

        def create
                @token = cookies.signed[:twitter_session_token]
                @session = Session.find_by(token: @token)
                return render json: {success: false} unless @session 
                @tweet = @session.user.tweets.new(tweets_param)
                if @tweet.save 
                    render 'api/tweets/create'
                else
                    render json: {
                        success: false
                    }
                end
        end

        def destroy
                @token = cookies.signed[:twitter_session_token]
                @session = Session.find_by(token: @token)
                return render json: {success: false} unless @session 
                @user = @session.user
                @tweet = Tweet.find_by(id: params[:id])
                if @tweet and @tweet.user === @user and @tweet.destroy
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
                def tweets_param
                    params.require(:tweet).permit(:message)
                end
    end
end