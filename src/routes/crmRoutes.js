import { addNewContact, getContacts, getContact, updateContact, deleteContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        // Get Contacts
        .get((req, res, next) => {
            // middleware
            console.log(`request URL ${req.originalUrl}`)
            console.log(`request Type ${req.method}`)
            next();
        }, getContacts)
        
        // Add Contact
        .post((req, res, next) => {
            console.log(`request URL ${req.originalUrl}`)
            console.log(`request Type ${req.method}`)
            next();
        }, addNewContact);

    
    app.route('/contact/:contactId')
        // Get specific contact
        .get(getContact)

        // Update contact
        .put(updateContact)
        
        // Delete Contact
        .delete(deleteContact);
}

export default routes;