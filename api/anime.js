const AnimeScraper = require('ctk-anime-scraper')
const Gogoanime = new AnimeScraper.Gogoanime()

module.exports = ()=>{
    try{
        Gogoanime.fetchAnime(req.body.link).then(data=>{
            res.send(data);
        })
    }catch(err){
        res.status(500).send(err)
    }
}