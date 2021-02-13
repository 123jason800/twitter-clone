class HomeController < ApplicationController
    def index
        render 'home/index'
    end

    def dashboard
        render 'home/dashboard'
    end
end
