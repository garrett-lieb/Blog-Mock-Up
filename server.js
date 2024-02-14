const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
// const routes = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;

// set up middleware
const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 3600000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}
app.use(session(sess));
// app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
    });




