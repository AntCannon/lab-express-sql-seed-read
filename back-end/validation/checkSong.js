function checkName(req, res, next) {
  if (req.body) {
    next()
  } else (
      res.status(400).json({error: "Name is Required"})
  )
}

function checkFavorite(req, res, next) {
  if (typeof req.body.is_favorite === 'boolean' || req.body.is_favorite === 'true' || req.body.is_favorite) {
    next()
  } else {
      res.status(400).send({error: "Favorite must be boolean"})
  }
}

module.exports = {
  checkName,
  checkFavorite
}