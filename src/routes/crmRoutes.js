import { addNewContact, getContacts, getContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`request URL ${req.originalUrl}`)
            console.log(`request Type ${req.method}`)
            next();
        }, getContacts)
        

        .post((req, res, next) => {
            console.log(`request URL ${req.originalUrl}`)
            console.log(`request Type ${req.method}`)
            next();
        }, addNewContact);

    
    app.route('/contact/:contactId')
        .get(getContact)
        
        .put((req, res) => 
        res.send('PUT request successfull!'))

        .delete((req, res) => 
        res.send('DELETE request successful!'));
}

export default routes;