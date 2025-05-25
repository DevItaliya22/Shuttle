import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (_, res) => {
    res.send('Express server running!')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
