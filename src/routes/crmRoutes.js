const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`request URL ${req.originalUrl}`)
            console.log(`request Type ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send('GET request successfull!')
        })
        

        .post((req, res, next) => {
            console.log(`request URL ${req.originalUrl}`)
            console.log(`request Type ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send('POST request successful!')
        });

    
    app.route('/contact/:contactId')
        .put((req, res) => 
        res.send('PUT request successfull!'))

        .delete((req, res) => 
        res.send('DELETE request successful!'));
}

export default routes;