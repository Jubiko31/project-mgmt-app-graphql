require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const connectDB = require('./config/db');
const colors = require('colors');
const PORT = process.env.PORT || 5000;

const app = express();

//Connection to database
connectDB();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, console.log(`Server started listening on port ${PORT}...`));