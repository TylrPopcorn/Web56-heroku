/*
    ----Used for catching errors:
    npx eslint --init (problems, commonjs, none, no, NODE only, JSON, yes, npm)

    npm install express
    npm i -D nodemon

    TO REMOVE/KILL ANY PORTS:
    npx kill-port 9000

    ENVIRONMENT VARIABLES:
    process.env (in node)
    env 
    TEST=frabjous node index.js
*/

console.log("Starting");

const server = require("./api/server")

//const PORT = 9000;
const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log("Listening on port: ", PORT)
})

/*
//ASYNC example:
function f() {
    setTimeout(() => console.log('done'), 1000);
    return 'foobar'
}

let x = f();

//-----------
function someAsyncProcess(n) {
    return new Promise(resolve, reject => {
        setTimeout(() => {
            if (n % 2) {
                reject("must be even")
            }
            resolve();
        }, 1000)
    })
}

someAsyncProcess()
    .then(() => {
        console.log("foobar")
        return someAsyncProcess()
    })
    .then(() => {
        console.log("foobar")
        return somethingElse
    })
    .catch(result => {
        console.log(result)
    })

//ASYNC AWAIT EXAMPLES:
async function asyncFunction() {
    try {
        let x = await someAsyncProcess();
        console.log.log('foobar')
    } catch (err) {
        console.log(err)
    }
}

//ENVIRONMENT VARIABLES:
console.log(process.env)
*/