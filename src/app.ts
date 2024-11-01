import express from 'express'
import notFoundRoute from './middleware/notFound'
export const app = express()

app.use(express.json())

app.use(notFoundRoute)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

