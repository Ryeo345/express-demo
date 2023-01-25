// const http = require('http');
//
// const server = http.createServer((req, res) => { // request and response
//     // console.log(req);// the server is listening and output a request
//     // res.write('<h1>Hello World</h1>');
//     // res.end(); // prints hello world
//
//     if (req.url === '/') {
//         res.write(`
//         <html>
//             <body>
//                 <h1>Home</h1>
//             </body>
//         </html>
//         `);
//         res.end();
//     }
//     else {
//         res.statusCode = 404;
//         res.write('<h1>Page Not Found <a href="/">Try Again</a></h1>');
//         res.end();
//     }
// });
//
// const port =process.env.PORT || 3000;
//
// server.listen(port, ()=> console.log(`listening on port ${port}`)); //listens


// easier express version
//first need to npm i express in the terminal to install the express dependencies
const express = require('express')
const app = express();

app.get('/', (req, res, next)=> {
    res.send(`
        <html>
            <body>
            <nav>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </nav>
                <h1>Home</h1>
            </body>
        </html>
    `);
});

app.get('/about', (req, res, next)=> {
    res.send(`
        <html>
            <body>
            <nav>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </nav>
                <h1>About</h1>
            </body>
        </html>
    `);
});

app.get('/contact', (req, res, next)=> {
    res.send(`
        <html>
            <body>
            <nav>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </nav>
                <h1>Contact</h1>
            </body>
        </html>
    `);
});

const port =process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));
// automatically sends a 404 page not found


