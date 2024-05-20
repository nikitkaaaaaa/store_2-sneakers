export const filter = (data,query) => {
    if(!data) return data
    return data.filter(item => item.name.toLowerCase().trim().startsWith(query.trim().toLowerCase()));
}