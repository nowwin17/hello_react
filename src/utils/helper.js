export const filterData = (searchText,restaurants) =>{
    const filterData = restaurants.filter((restraunt)=>
    restraunt?.data?.name.toLowerCase().includes(searchText.toLowerCase()))
    return filterData
}