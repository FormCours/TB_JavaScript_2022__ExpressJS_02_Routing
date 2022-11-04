const homeController = {

    index: (req, res) => {
        res.send('<h1>Home</h1>');
    }, 

    contact: (req, res) => {
        res.send('<h1>Contact</h1>');
    },
    
    number: (req, res) => {
        const nb = parseInt(req.params.nb);

        res.send(`<h1>Number ${nb}</h1>`);
    }

};

module.exports = homeController;