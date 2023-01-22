// const express = require('express');
// const path = require('path');



// const app = express();
// const publicPath = path.join(__dirname, 'Public');
// app.use(express.static(publicPath))


// app.listen(5000);

/*******************************************************************************************************/

// const express = require('express');
// const path = require('path');


// const app = express();
// const publicPath = path.join(__dirname, 'Public');

// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// })
// app.get('/About', (req, res) => {
//     res.sendFile(`${publicPath}/About.html`)
// })
// app.get('/Help', (req, res) => {
//     res.sendFile(`${publicPath}/Help.html`)
// })
// app.get('/Home', (req, res) => {
//     res.sendFile(`${publicPath}/Home.html`)
// })
// app.get('*', (req, res) => {
//     res.sendFile(`${publicPath}/NoPage.html`)
// })

// app.listen(5000);


/*******************************************************************************************************/

// const express = require('express');
// const path = require('path');


// const app = express();
// const publicPath = path.join(__dirname, 'Public');
// app.set('view engine','ejs');

// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// })
// app.get('/profile', (req, res) => {
//     const user ={
//         name:'Saquib Hassan',
//         email:'saquib23101996@gmail.com',
//         city:'Darbhanga'
//     }
//     res.render('profile',{user});
// })
// app.get('/About', (req, res) => {
//     res.sendFile(`${publicPath}/About.html`)
// })
// app.get('/Help', (req, res) => {
//     res.sendFile(`${publicPath}/Help.html`)
// })
// app.get('/Home', (req, res) => {
//     res.sendFile(`${publicPath}/Home.html`)
// })
// app.get('*', (req, res) => {
//     res.sendFile(`${publicPath}/NoPage.html`)
// })

// app.listen(5000);


/*******************************************************************************************************/

const express = require('express');
const path = require('path');


const app = express();
const publicPath = path.join(__dirname, 'Public');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/profile', (req, res) => {
    const user = {
        name: 'Saquib Hassan',
        email: 'saquib23101996@gmail.com',
        city: 'Darbhanga',
        skills: ['PHP', 'JS', 'C++', 'Singing', 'Music', 'Ramantadine']
    }
    res.render('profile', { user });
})
app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/About', (req, res) => {
    res.sendFile(`${publicPath}/About.html`)
})
app.get('/Help', (req, res) => {
    res.sendFile(`${publicPath}/Help.html`)
})
app.get('/Home', (req, res) => {
    res.sendFile(`${publicPath}/Home.html`)
})
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/NoPage.html`)
})

app.listen(5000);