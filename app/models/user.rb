class User < ApplicationRecord
    has_many :tweets ,dependent: :destroy
    has_many :sessions , dependent: :destroy

    validates :username, presence: true, uniqueness: { case_sensitive: true }, length: { minimum: 3, maximum: 64 }
    validates :email, presence: true, uniqueness: { case_sensitive: true }, length: { minimum: 5, maximum: 500 }
    validates :password, presence: true, length: {minimum: 8, maximum: 64 }
    validates :term, presence: true, acceptance: {message: "Please Agree On Our Policy"}
    validates_uniqueness_of :username
    validates_uniqueness_of :email

    # After Validation Create A Hashed Password
    after_validation :hash_password

    private 
        def hash_password
            self.password = BCrypt::Password.create(self.password)
        end

    
end
