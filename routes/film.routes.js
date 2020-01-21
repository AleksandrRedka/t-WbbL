const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const Film = require('../models/Film')
const router = Router()

// /api/film ----- CREATE FILM
router.post(
  '/film',
  [
    check('title', 'Название фильма не указано')
      .not()
      .isEmpty(),
    check('release', 'Год релиза не введен')
      .not()
      .isEmpty(),
    check('format', 'Формат не введен')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    console.log(req)
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Не коректные данные при созданиие фильма'
        })
      }
      const { title, release, format, actors } = req.body
      const film = new Film({ title, release, format, actors })
      await film
        .save()
        .then(function (doc) {})
        .catch(function (err) {})
      res.status(201).json({ status: 201, message: 'Фильм добавлен!' })
    } catch (e) {
      res.status(500).json({ message: 'Что то пошло не так' })
    }
  }
)

/// api/film --- GET FILMS
router.get('/film', async (req, res) => {
  try {
    const films = await Film.find()
    res.json(films)
  } catch (e) {
    res.status(500).send({ message: 'Данные не найдены' })
  }
})

//api/film -  DELETE FILM
router.delete('/film', async (req, res) => {
  console.log(req.body)
  try {
    const { id } = req.body
    Film.findOneAndRemove(
      { _id: id.trim() },
      { new: true, useFindAndModify: false }
    ).then((data, err) => {
      if (err) {
        console.log('ERROR', err)
        throw e
      } else {
        res.status(201).json({ status: 200, messege: 'Фильм успешно удален' })
      }
    })
  } catch (e) {
    res.status(500).send({ message: 'К сожалению фильм не удален' })
  }
})

module.exports = router
