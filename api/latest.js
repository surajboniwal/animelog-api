const AnimeScraper = require('ctk-anime-scraper')
const Gogoanime = new AnimeScraper.Gogoanime()

module.exports = (req, res)=>{
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    try{
        Gogoanime.getRecentAnime().then(data=>{
            res.send(data)
        })
    }catch(err){
        res.status(500).send(err)
    }
}