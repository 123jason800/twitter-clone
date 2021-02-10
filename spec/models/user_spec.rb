require 'rails_helper'


RSpec.describe User, type: :model do
   

    it 'has a username' do
        test_user = User.new(email:"test@gmail.com",password:"12345678",username:"",term:true)

        expect(test_user).to_not be_valid
    end

    
    it 'username above 3 chars' do 
        test_user = User.new(email:"test@gmail.com",password:"12345678",username:"12",term:true)
        expect(test_user).to_not be_valid
    end

    it 'username under 64 chars' do 
        test_user = User.new(email:"test@gmail.com",password:"12345678",username:"1" * 65,term:true)
        expect(test_user).to_not be_valid
    end


end