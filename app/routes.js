const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/where-do-you-live', function (req, res) {

  let whereDoYouLive = req.session.data['where-do-you-live']

  if (whereDoYouLive === 'another-country') {
    res.redirect('/how-do-you-want-to-register')
  }

  res.redirect('/uk-journey')

})


router.post('/how-do-you-want-to-register', function (req, res) {

  let howDoYouWantToRegister = req.session.data['how-do-you-want-to-register']

  if (howDoYouWantToRegister === 'irish') {
    res.redirect('/overseas-irish')
  } else {
    res.redirect('/uk-live-previous')
  }

})


router.post('/uk-live-previous', function (req, res) {

  let ukLivePrevious = req.session.data['uk-live-previous']

  res.redirect('/overseas-british?ukLivePrevious=' + ukLivePrevious)

})

router.get('/overseas-british', function (req, res) {

  let ukLivePrevious = req.query.ukLivePrevious

  res.render(
    'overseas-british.html',
    {
      ukLivePrevious: ukLivePrevious
    }
  )

})


module.exports = router
