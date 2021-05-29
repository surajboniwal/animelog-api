const AnimeScraper = require('ctk-anime-scraper')
const Gogoanime = new AnimeScraper.Gogoanime()

module.exports = ()=>{
    try{
        res.send('Anime')
        // Gogoanime.fetchAnime(req.body.link).then(data=>{
        //     res.send(req.body);
        // })
    }catch(err){
        res.status(500).send(err)
    }
}