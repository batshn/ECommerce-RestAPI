import {addNewCategory, 
        getCategories,
        getCategoryWithID,
        updateCategory,
        deleteCategory
} from '../controller/categoryController';

const routes = (app) => {
    app.route('/category')
        .get((req, res, next) => {
            //middleware
           // console.log(`Request from : ${req.originalUrl}`)
           // console.log(`Request type:${req.method}`)
           res.header('Access-Control-Allow-Origin', "*");
           res.header('Access-Control-Allow-Headers', "*");
            next();
        }, getCategories)
        

        .post(addNewCategory);

    app.route('/category/:catID')
        .get(getCategoryWithID)

        .put(updateCategory)

        .delete(deleteCategory);
}

export default routes;
