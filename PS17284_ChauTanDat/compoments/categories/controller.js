const categoryService = require('../categories/service');

exports.getCategories = async () => {
    const data = await categoryService.getCategories();
    return data;
}

exports.getCategoriesSelected = async (id) => {
    let data = await categoryService.getCategories();
    data = data.map(item => {
        item = {
            _id: item._id, // sai id // _id 
            name: item.name,
            description: item.description,
            selected: item._id == id
        }
        return item;
    })
    return data;
}