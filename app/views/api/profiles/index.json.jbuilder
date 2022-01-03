
@profiles.each do |profile|
    json.set! profile.id do 
        json.extract! profile, :id, :user_id, :name
    end
end
