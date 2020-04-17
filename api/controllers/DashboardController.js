const Spot = require('../models/Spot');

module.exports = {
    async show(req, res){
        const { id_user } = req.headers;
        const spots = await Spot.find( {user: id_user });

        return res.json(spots);
    }
}