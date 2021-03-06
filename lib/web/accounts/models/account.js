var Hoek = require('hoek');

var Account = function(accountParams){
    this.id;
    this.email;
    this.password;
    this.passwordConfirmation;
    this.encryptedPassword;
    this.privateKey;
    this.accountToken;
    this.streams;

    if(!accountParams)
        accountParams = {};
    else{
        this.id                   = accountParams.id || '';
        this.email                = accountParams.email;
        this.password             = accountParams.password;
        this.passwordConfirmation = accountParams.password_confirmation || accountParams.passwordConfirmation;
        this.privateKey           = accountParams.privateKey || null;
        this.streams              = accountParams.streams || [];
    }

}

Account.prototype.attributes = function(){
    var attrs = {
        id: this.id,
        email: this.email,
        encryptedPassword: this.encryptedPassword,
        privateKey: this.privateKey,
        accountToken: this.accountToken,
        streams: this.streams
    };

    if(this.password)
        Hoek.merge(attrs, {password: this.password})

    if(this.passwordConfirmation)
        Hoek.merge(attrs, {passwordConfirmation: this.passwordConfirmation});


    return attrs;
}

module.exports = Account;