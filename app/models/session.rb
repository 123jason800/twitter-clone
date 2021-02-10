class Session < ApplicationRecord
  belongs_to :user

  validates :user, presence: true
  before_validation :generate_session_token

  private 
  def generate_session_token
    #Generates a token and saves it into token:string
    self.token = SecureRandom.urlsafe_base64
  end
end
