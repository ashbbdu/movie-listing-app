const express = require("express")
const { movieController, movieDetails, queryString } = require("../controllers/Movies")

const router = express.Router()

router.get("/movie-list" , movieController)
router.get("/movieDetails/:id" , movieDetails)
router.get(`/movieQuery/:key/:name` , queryString)

module.exports = router;