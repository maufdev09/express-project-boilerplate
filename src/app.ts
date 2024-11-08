import express from 'express'
import globalErrorHandler from './middleware/globalErrorHandler'
import notFound from './middleware/notFound'
export const app = express()

app.use(express.json())



app.use(globalErrorHandler)


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(notFound)

