import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

// main().catch(err => console.log(err));

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`database connected`)

    app.listen(config.port, () => {
      console.log(`application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(err, 'failed to connect faiz')
  }
}
bootstrap()
