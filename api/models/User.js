/**
* User.js
*
*/
// var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
   phone: {
      type: 'string',
      required: true,
      unique: true
    },
    sip: {
      type: 'string',
    },
    chat: {
      type: 'string',
    },
    code: {
      type: 'string',
      minLength: 4
    }
  },
   // Lifecycle Callbacks
  beforeCreate: function (values, cb) {
    User.count(function(err,num){
      values.sip = (num + 1 + 10000) + '@104.236.124.124';
      values.chat = 'user' + (num + 1)  + '@104.236.124.124';
      values.code = 1234;
      cb();
    });

  },
  afterCreate: function (newlyInsertedRecord, cb){
  	console.log(newlyInsertedRecord);
  	console.log('create XMPP User');
    //EjabberdService.createUser(newlyInsertedRecord);
  	cb();
  }
};
