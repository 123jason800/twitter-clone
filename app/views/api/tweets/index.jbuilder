json.tweets do
    json.array! @tweets do |tweet|
        json.id tweet.user.id
        json.username tweet.user.username
        json.message tweet.message
    end
end