json.extract! @profile, :id, :name

json.myList do 
    @my_list.each do |list_item|
        json.set! list_item.id do
            json.extract! list_item, :movie_id, :profile_id
        end
    end
end