const path = require('path');
const express = require('express');
const os = require("os");
const AppRouter = require("My-own-SPA-Framework/backend/Routes/app.controller")

const app = express();

// Init path to static files
const staticPath = path.join(__dirname, '../dist');
app.use(express.static(staticPath));

// Init middlewares for parsing content
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Init App Router
app.use(AppRouter)

// Run node server
const port = process.env.BACKEND_SERVER_PORT || 3000
const server = app.listen(port, function () {
    console.log(`Node.js server has been started on localhost:${port}`);
});