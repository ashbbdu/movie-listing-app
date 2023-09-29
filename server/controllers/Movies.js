const movieData =  require("../data/data.json")

module.exports.movieController = (req , res) => {
    try {
        const data = movieData;
        if(data) {
           return res.status(200).json({
                success : true,
                message : "Movies Fetched Successfully",
                data : data,
            }
           )
     } 
    } catch (error) {
      return  res.status(404).json({
            success : false,
            message : "Unable to fetch movies , plese try again",
            error : "Somthing went wrong",
        })
    }
}

module.exports.movieDetails =  (req , res) => {
    const {id} = req.params;
   
    try {
        let movie =  movieData.filter(el => el.id == id )
        return res.status(200).json({
            success :true,
            message : "Movie Details Fetched Successfully",
            movie
        })
    } catch (error) {
        return  res.status(404).json({
              success : false,
              message : "Unable to get movie details",
              error : "Somthing went wrong",
          })
    }
}