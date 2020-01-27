const { Router } = require('express')
const multer = require('multer')
const fs = require('fs')
const router = Router()
const upload = multer()
const Film = require('../models/Film')

// /api/film   FIMLS FROM FILE

router.post('/file', upload.single('file'), async (req, res) => {
  try {
    const file = req.file
    const data = file.buffer.toString('utf8')

    function getArrFilms (str) {
      const arr = []
      const regular = str
        .trim()
        .split('\n\n')
        .map(item => item.split('\n'))
        .map(film => film.map(str => str.split(':')))
      for (let i of regular) {
        let b = {}
        let c = 1
        for (a of i) {
          if (c === 1) b.title = a[1].trim()
          if (c === 2) b.release = +a[1].trim()
          if (c === 3) b.format = a[1].trim()
          if (c === 4) b.actors = a[1].trim()
          c++
        }
        arr.push(b)
      }
      return arr
    }
    const arrFilms = await getArrFilms(data)
    arrFilms.map(async item => {
      const { title, release, format, actors } = item
      const findDouble = await Film.find({
        title: title,
        release: release,
        actors: actors
      })
      if (findDouble.length > 0) {
        return
      }
      const film = new Film({ title, release, format, actors })
      film.save()
    })
    res.status(201).json({ status: 201, message: 'Comlpite' })
    // const film = await Film.create(arrFilms)
  } catch (e) {
    console.log('ERROR:', e)
    res.status(500).json({ message: 'Что то пошло не так' })
  }
})

module.exports = router
