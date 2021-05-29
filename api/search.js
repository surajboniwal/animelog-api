const AnimeScraper = require('ctk-anime-scraper')
const Gogoanime = new AnimeScraper.Gogoanime()

module.exports = (req, res)=>{
    try{
        Gogoanime.search(req.body.name).then(result=>{
            res.send(result)
        })
    }catch(err){
        res.status(500).send(err)
    }
}