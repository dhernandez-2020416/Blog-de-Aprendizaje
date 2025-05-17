import { initServer } from './configs/app.js'
import { config } from 'dotenv'
import { connect } from './configs/mongo.js'
import { addPostsToDB } from './helpers/db.validators.js'

config()
initServer()
connect()
addPostsToDB()