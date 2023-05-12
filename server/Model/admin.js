const mongoose  = require('mongoose')
const crypto   = require('crypto')
const adminSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name:{
        type:String,
        required:true,
        trim:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true

    },
    password:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        min:8,
        max:32
    },
    hashed_password:{
        type:String,
        
    },

    salt:{
        type:String
    },

    date:{
        type:Date,
        default:Date.now()
        
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }

})


adminSchema.virtual('password')
.set(function(plainText){
 this._password = plainText   
 this.salt = this.makeSalt() 
 this.hashed_password = this.encryptPassword(plainText)
}).get(function(){
    return this._password
})
//    
// }



adminSchema.methods.isAuthenticated = function(plainText,hashed_password){
    return this.encryptPassword(plainText) === this.hashed_password
}

adminSchema.method.makeSalt = function(){
    return Math.random()*9999 + Date.now().toLocaleString()
    
}


adminSchema.methods.encryptPassword = function(password){

    const salt = this.salt

    const hash = crypto.createHmac('sha256',salt)
    .update(password)
    .digest('hex')

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);
}



const adminModel = new mongoose.model('Admin',adminSchema)


export default adminModel