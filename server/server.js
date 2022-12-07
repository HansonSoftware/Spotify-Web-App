const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


// app.post("/refresh", (req, res) => {
//     const refreshToken = req.body.refreshToken
//     const spotifyApi = new SpotifyWebApi({
//         redirectUri: "http://localhost:3000",
//         clientId: "fc2f884fd6de426cb2f6f520d7c7e176",
//         clientSecret: "d482cd8aadda4b51a0d3a6da829bfe17",
//         refreshToken,
//     })

//     spotifyApi
//         .refreshAccessToken()
//         .then(data => {
//             res.json({
//             accessToken: data.body.accessToken,
//             expiresIn: data.body.expiresIn,
//             })
//         })
//         .catch(e => {
//             console.log(e)
//             res.sendStatus(400)
//     })
// })

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyAPI = new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId: "fc2f884fd6de426cb2f6f520d7c7e176",
        clientSecret: "d482cd8aadda4b51a0d3a6da829bfe17",
    });
    
    spotifyAPI
        .authorizationCodeGrant(code)
        .then(data => {
            console.log(data);
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch(e => {
            console.log(e)
            res.sendStatus(400)
        })
})

app.listen(3001)