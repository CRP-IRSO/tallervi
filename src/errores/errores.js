//manejar error 404
module.exports = {
    error404: (req, res) => {
        res.status(404).json({
            error: '404: File Not Found'
        });
    },

// manejar error 400
    error400: function (error, req, res, next) {
        res.status(400).json({
            name: error.name,
            error: error.message,
            path: error.path
        });
    }
}
