/*
    ----Used for catching errors:
    npx eslint --init (problems, commonjs, none, no, NODE only, JSON, yes, npm)

    npm install express
    npm i -D nodemon
*/

console.log("Starting");

const server = require("./api/server")

const PORT = 9000;

server.listen(PORT, () => {
    console.log("Listening on port: ", PORT)
})
