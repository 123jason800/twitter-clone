json.success true
json.tweets do
    json.array! @tweets do |tweet|
        json.id tweet.user.id
        json.username tweet.user.username
        json.message tweet.message
        json.tweetID tweet.id
        if tweet.image.attached?
            json.image url_for(tweet.image)
        else
            json.image nil
        end
    end
end