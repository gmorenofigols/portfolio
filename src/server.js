const express = require('express')
const app = express()

app.use(express.json())

let movies = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]

  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/movies', (req, res) => {
    res.json(movies)
  })

  app.post('/api/movies', (req, res) =>{
    const body = req.body

    if (!body.content) {
      return res.status(400).json({ 
        error: 'content missing' 
      })
    }

    const movie = {
      content: body.content,
      important: body.important || false,
      date: new Date(),
      id: generateId(),
    }

    movies = movies.concat(movie)

    res.json(movie)
  })

  const generateId = () => {
    const maxId = movies.length > 0
      ? Math.max(...movies.map(n => n.id))
      : 0
    return maxId + 1
  }
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })