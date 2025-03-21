// Import express module
const express = require('express');
//import mongoose
const mongoose = require('mongoose');
//import bcrypt moddule
const bcrypt = require('bcrypt');
// coonecter expres avec mongoose db
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');
// import body-parser module
const bodyParser = require('body-parser');
//import jsonwebtoken
const jwt = require('jsonwebtoken');
//import express session
const session = require('express-session');
//import axios 
const axios = require('axios');
//import multer
const multer = require('multer');
//import path
const path = require('path');


// Creates an express application 
const app = express();
//models importations
const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const User = require("./models/user");
const Stadium = require("./models/stadium");
const { ifError } = require('assert');
// app configuration
// send Response with JSON format (BE=>FE)
app.use(bodyParser.json());
// get object from Req (POST,PUT,PATCH)
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );

    next();
});
const secretKey = 'croco-key';
app.use(session({
    secret: secretKey,
}));
//upload file configuration
app.use('/images', express.static(path.join('backend/images/uploads')));
//accept only files with defined mime type
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        if (isValid) {
            cb(null, 'backend/images/uploads')
        }
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});


// DataBase Simulation
let matchesTab = [
    { id: 1, scoreOne: 0, scoreTwo: 3, teamOne: "RMD", teamTwo: "FCB" },
    { id: 2, scoreOne: 1, scoreTwo: 3, teamOne: "CA", teamTwo: "EST" },
    { id: 3, scoreOne: 3, scoreTwo: 2, teamOne: "JUV", teamTwo: "ROM" },
];
let playersTab = [
    { id: 1, name: "cristiano", position: "ATK", age: 37, number: 7, teamId: 1 },
    { id: 2, name: "messi", position: "GAL", age: 29, number: 19, teamId: 2 },
    { id: 3, name: "pique", position: "ATK", age: 19, number: 6, teamId: 3 },
];
let teamsTab = [
    { id: 1, name: "FCB", owner: "med", foundation: 1999 },
    { id: 2, name: "RMD", owner: "salah", foundation: 1984 },
    { id: 3, name: "EST", owner: "ali", foundation: 1970 },
];
let usersTab = [
    { id: 1, firstName: "ines", lastName: "khalfallah", email: "ines@gmail.com", password: 996633, phone: 22666555 },
    { id: 2, firstName: "ali", lastName: "bensalah", email: "salah@gmail.com", password: 336655, phone: 22686555 },
    { id: 3, firstName: "salah", lastName: "benali", email: "ali@gmail.com", password: 123456, phone: 22667555 },
];
let stadiumsTab = [
    { id: 1, name: "croco", country: "tunis", capacity: 400 },
    { id: 2, name: "rades", country: "tunis", capacity: 2000 },
    { id: 3, name: "sud", country: "gabes", capacity: 500 }
];

// SERVICE MATCH
// app.ACTIONHTTP("/PATH",(req,res)=>{});
// Traitement logique : Get All Matches
app.get("/api/matches", (req, res) => {
    console.log('Here into TL : Get All Matches');
    Match.find().then((docs) => {
        console.log("here docs from collection matches", docs);
        res.json({ tab: docs, nbr: docs.length });
    })

});

// Traitement logique : get Match by id
app.get("/api/matches/:id", (req, res) => {
    console.log('Here into TL : get Match By ID');
    // get id from path
    let matchId = req.params.id;
    Match.findById(matchId).then((doc) => {
        console.log("here doc from matches collection", doc);
        (doc) ?
            res.json({ foundMatch: doc }) :
            res.json({ msg: "Match not found" });
    })



}
);

// Traitement logique : Edit Match
app.put("/api/matches", (req, res) => {
    console.log('Here into TL : Edit Match', req.body);
    let newMatch = req.body;
    Match.updateOne({ _id: newMatch._id }, newMatch).then(
        (updateResponse) => {
            console.log("here response after update ", updateResponse);
            (updateResponse.nModified == 1) ?
                res.json({ isEdited: true }) :
                res.json({ isEdited: "match not found" })
        })

}
)


// Traitement logique : Add Match
app.post("/api/matches", (req, res) => {
    console.log('Here into TL : add Match');
    let matchObj = new Match(req.body);
    matchObj.save((err, doc) => {
        console.log("here error", err);
        console.log("here error", doc);
        (err) ? res.json({ msg: 'Error' }) : res.json({ msg: 'isAdded' });
    });

});

// Traitement logique : delete Matches
app.delete("/api/matches/:id", (req, res) => {
    console.log('Here into TL : delete Match');
    let matchId = req.params.id;

    Match.deleteOne({ _id: matchId }).then(
        (deleteResponse) => {
            console.log("here response after delete", deleteResponse);
            (deleteResponse.deletedCount == 1) ?
                res.json({ msg: "OK" }) : res.json({ msg: "NOT OK" });
        }
    )
});
// SERVICE PLAYER
// Traitement logique : Get All players
app.get("/api/players", (req, res) => {
    console.log('Here into TL : Get All players');

    Player.find().then((docs) => {
        console.log("here docs from collection matches", docs);
        res.json({ tab: docs, nbr: docs.length });
    })
});

// Traitement logique : get player by id
app.get("/api/players/:id", (req, res) => {
    console.log('Here into TL : get player By ID');
    // get id from path
    let playerId = req.params.id;

    Player.findById(playerId).then((doc) => {
        console.log("here doc from palyers collection", doc);
        (doc) ?
            res.json({ foundPlayer: doc }) :
            res.json({ msg: "player not found" });
    })
});

// Traitement logique : Edit Player
app.put("/api/players", (req, res) => {
    console.log('Here into TL : Edit Player');
    let newPlayer = req.body;
    Match.updateOne({ _id: newPlayer._id }, newPlayer).then(
        (updateResponse) => {
            console.log("here response after update ", updateResponse);
            (updateResponse.nModified == 1) ?
                res.json({ isEdited: true }) :
                res.json({ isEdited: "player not found" })
        })
});

// Traitement logique : Add Player
app.post("/api/players", (req, res) => {
    console.log('Here into TL : add Player');
    Team.findById(req.body.tId).then(
        (foundTeam) => {
            console.log("here found team", foundTeam);
            //team is not found
            if (!foundTeam) {
                res.json({ msg: "team not found" });
            } else {
                let playerObj = new Player({
                    name: req.body.name,
                    age: req.body.age,
                    position: req.body.position,
                    nbr: req.body.number,
                    teamId: foundTeam._id,
                })
                //save player
                playerObj.save((err, doc) => {
                    console.log("here err", err);
                    console.log("here err", doc);
                    if (doc) {
                        foundTeam.playersId.push(doc._id);
                        foundTeam.save();
                        res.json({ msg: "player added with success" });
                    } else {
                        res.json({ msg: "player not added" });

                    }
                }
                )
            }
        }
    )
});

// Traitement logique : delete players
app.delete("/api/players/:id", (req, res) => {
    console.log('Here into TL : delete Player');
    // get id from path
    let playerId = req.params.id;
    Player.deleteOne({ _id: playerId }).then(
        (deleteResponse) => {
            console.log("here response after delete", deleteResponse);
            (deleteResponse.deletedCount == 1) ?
                res.json({ msg: "OK" }) : res.json({ msg: "NOT OK" });
        }
    )
});


// SERVICE TEAM
// Traitement logique : Get All Teams
app.get("/api/teams", (req, res) => {
    console.log('Here into TL : Get All teams');
    Team.find().populate().then((docs) => {
        console.log("here docs from collection matches", docs);
        res.json({ tab: docs, nbr: docs.length });
    })
});

// Traitement logique : get Teams by id
app.get("/api/teams/:id", (req, res) => {
    console.log('Here into TL : get Team By ID');
    // get id from path
    let teamId = req.params.id;
    Team.findById(teamId).then((doc) => {
        console.log("here doc from palyers collection", doc);
        (doc) ?
            res.json({ foundTeam: doc }) :
            res.json({ msg: "player not found" });
    })
});

// Traitement logique : Edit Team
app.put("/api/teams", (req, res) => {
    console.log('Here into TL : Edit Team');
    let newTeam = req.body;
    Match.updateOne({ _id: newTeam._id }, newTeam).then(
        (updateResponse) => {
            console.log("here response after update ", updateResponse);
            (updateResponse.nModified == 1) ?
                res.json({ isEdited: true }) :
                res.json({ isEdited: "team not found" })
        })
});

// Traitement logique : Add Team
app.post("/api/teams", (req, res) => {
    console.log('Here into TL : add Team');
    let teamObj = new Team(req.body);
    teamObj.save((err, doc) => {
        console.log("here error", err);
        console.log("here error", doc);
        (err) ? res.json({ msg: 'Error' }) : res.json({ msg: 'isAdded' });
    });
});
// Traitement logique : Add Stadium
app.post("/api/stadiums", (req, res) => {
    console.log('Here into TL : add Stadium');
    let stadiumObj = new Stadium(req.body);
    stadiumObj.save((err, doc) => {
        console.log("here error", err);
        console.log("here error", doc);

        (err) ? res.json({ msg: 'Error' }) : res.json({ msg: 'isAdded' })
    });
    res.json({ msg: 'isAdded' });
});

// Traitement logique : delete Team by ID
app.delete("/api/teams/:id", (req, res) => {
    console.log('Here into TL : delete Teams');
    // get id from path
    let teamId = req.params.id;
    Team.deleteOne({ _id: teamId }).then(
        (deleteResponse) => {
            console.log("here response after delete", deleteResponse);
            (deleteResponse.deletedCount == 1) ?
                res.json({ msg: "OK" }) : res.json({ msg: "NOT OK" });
        }
    )
});


// Traitement Logique Add User
app.post("/api/users/addUser", (req, res) => {
    console.log("Here into TL : Add User", req.body);
    User.findOne({ email: req.body.email }).then(
        (user) => {
            console.log("here user after search by email", user);
            if (user) {
                res.json({ msg: "0" })
            } else {
                bcrypt.hash(req.body.pwd, 10).then(
                    (hash) => {
                        console.log("here crypted pwd", hash);
                        req.body.pwd = hash;
                        req.body.photo = "http://localhost:3000" + "/images/" + req.file.filename
                        let user = new User(req.body);
                        user.save(
                            (err, doc) => {
                                console.log('err', err);
                                console.log('doc', doc);

                                if (doc) {
                                    res.json({ msg: "1" });
                                }
                            }
                        )
                    }
                )
            }
        }
    )
});
// Traitement Logique Connect User
app.post("/api/users/signin", multer({ storage: storage }).single('img'), (req, res) => {
    console.log("Here into TL : login");
    let user = req.body
    User.findOne({ email: req.body.email }).then(
        (foundUser) => {
            console.log("here found user by email", foundUser);
            if (!foundUser) {
                res.json({ msg: "0" })
            } else {
                bcrypt.compare(req.body.pwd, foundUser.pwd).then(
                    (pwdResult) => {
                        console.log("here compare result", pwdResult);
                        if (pwdResult) {
                            let userToSend = {
                                fName: foundUser.firstName,
                                lName: foundUser.lastName,
                                role: foundUser.role,
                            };
                            // If the user is valid, generate a JWT token
                            const token = jwt.sign(userToSend, secretKey, { expiresIn: '1h' });
                            console.log("token", token);

                            res.json({ msg: "2", user: token });
                        } else {
                            res.json({ msg: "1" });
                        }
                    }
                )
            }
        }
    )
});

app.post("/api/matches/searchMatches", (req, res) => {
    console.log("here search", req.body);
    this.result = [];
    let search = req.body

    // loop
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].scoreOne == search ||
            matchesTab[i].scoreTwo == search) {
            result.push(matchesTab[i])
        }
    }
    res.json({ tab: foundMatches })
}
)
app.post("/stadiums", (req, res) => {
    console.log("here is stadium", req.body);


    let foundStadiums = stadiumsTab.filter(elt => elt.capacity >= req.body.min && elt.capacity <= req.body.max);
    res.json({ tab: foundStadiums });
})
app.post("api/players", (req, res) => {
    console.log("here is player".req.body);

    let foundPlayer = playersTab.find(elt => elt.name == req.body.name)
    console.log(("here found player", foundPlayer));
    if (foundPlayer) {
        let foundTeam = teamsTab.find(elt => elt.id == foundPlayer.teamId);
        console.log("here found team", foundTeam);
        res.json({ team: foundTeam, player: foundPlayer })
    } else {
        res.json({ msg: "player not found" })
    }

})
app.post("api/teamplayers", (req, res) => {
    console.log("here is player".req.body);

    let foundTeam = teamsTab.find(elt => elt.name == req.body.name)
    console.log(("here found team", foundTeam));
    if (foundTeam) {
        let foundPlayer = playersTab.filter(elt => elt.teamId == foundTeam.id);
        console.log("here found team", foundPlayer);
    } else {
        res.json({ player: foundPlayer })
    }
})

app.get('/api/user', (req, res) => {
    res.json(user);
})
// search weather
app.post("/api/weather", (req, res) => {
    console.log("here into bl", req.body);
    let key = '187417c32d8ce85f2d02f8f1827ca160'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`
    axios.key(apiUrl).then((apiResponse) => {
        let weather = {
            temperature: apiResponse.date.main.temp,
            pressure: apiResponse.date.main.pressure,
            windSpeed: apiResponse.date.wind.speed,
            humidity: apiResponse.date.main.humidity,
        }
        res.json({ result: weather, msg: "ok" })
    }
    )
}
)
// Make app importable from another files
module.exports = app;