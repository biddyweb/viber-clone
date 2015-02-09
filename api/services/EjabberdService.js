module.exports = {

    createUser: function(options) {

        //Dependencies
        var xmpp = require('node-xmpp');

        //Host configuration
        var host = "104.236.124.124";
        var port = "5222";
        var admin = "admin@localhost";
        var adminPass = "gcsvn123";

        var connection = new xmpp.Client({
          jid: admin,
          password: adminPass,
          host: host,
          port: port
        });

        console.log(connection);


        //user to be registered name & pass
        var newUserName = options.phone + "-" + options.id;
        var newUserPass = "gcsvn123";

        //Stream
        var iq = "<stream:stream xmlns:stream='http://etherx.jabber.org/streams' xmlns='jabber:component:accept' to='localhost'><iq type='set' id='reg2'><query xmlns='jabber:iq:register'><username>" + newUserName + "</username><password>" + newUserPass + "</password></query></iq></stream>";

        //Send
        connection.send(iq);

        //End
        connection.end();

    }
};
