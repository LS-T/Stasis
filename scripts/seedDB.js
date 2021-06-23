const mongoose = require('mongoose');
const db =  require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/stasis');

const quotesSeed = [
    {
        quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        artist: 'Jimmy Dean'
    },
    {
        quote: 'We generate fears while we sit. We overcome them by action.',
        artist: 'Dr. Henry Link'
    },
    {
        quote: "Whether you think you can or think you can't, you're right.",
        artist: 'Henry Ford'
    },
    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        artist: 'Zig Ziglar'
    },
    {
        quote: 'We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.',
        artist: 'Buddha'
    },
];

const usersSeed = [
    {
        user_name: "John",
        password:1234
    },
    {
        user_name: "Haden",
        password:4321
    }
]
db.Users.remove({})
    .then(() => db.Users.collection.insertMany(usersSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.log(err)
        process.exit(1);
    })

db.Quotes.remove({})
    .then(() => db.Quotes.collection.insertMany(quotesSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });