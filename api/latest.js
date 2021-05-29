const AnimeScraper = require('ctk-anime-scraper')
const Gogoanime = new AnimeScraper.Gogoanime()

module.exports = (req, res)=>{
    try{
        Gogoanime.getRecentAnime().then(data=>{
            res.send(req)
        })
    }catch(err){
        res.status(500).send(err)
    }
}