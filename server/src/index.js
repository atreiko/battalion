import appLoader from './loaders'
import config from './config'

(async function() {
  const PORT = config.PORT
  const app = await appLoader({config})

  app.listen(PORT, (err) => {
    if (err) {
      console.log('Something bad happened -->', err);
      process.exit(1)
      return
    }
    console.log(`
      ################################################
     / Server listening on port: ${PORT} and "/api/v${config.VERSION}" /
    ################################################
    `);
  })
})() 


// const app = express()
// app.use(cors())

// app.get('/api/', (res, req) => {
//   req.json(data.homeImages)
// })

// app.get('/api/soldiers/', (res, req) => {
//   req.json(data.soldiers)
// })

// app.get('/api/valor/', (res, req) => {
//   req.json(data.valor)
// })

// app.get('/api/photos/', (res, req) => {
//   req.json(data.photos)
// })

