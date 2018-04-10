const { Client } = require('klasa');

new Client({
    fetchAllMembers: false,
    prefix: '+',
    cmdEditing: true,
    typing: true,
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`
}).login('MzI2NjIwMzcxMDgyMjgwOTYx.DCpcfQ.yzT4fWqJYx9dGKEORHUpLxJvpP0');