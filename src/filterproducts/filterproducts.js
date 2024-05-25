export const filterproducts = (data,search,choise) => {
    if(!data) return data;
    let filter = data.filter(item => item.name.toLowerCase().trim().startsWith(search.trim().toLowerCase()));
    if(choise == "price"){
        filter = filter.sort((a,b) => a.price - b.price)
    }else if(choise == 'rating'){
        filter = filter.sort((a,b) => b.rating - a.rating)
    }
    return filter
}