const mongoose = require ('mongoose'); 
    
const db = "mongodb+srv://MarcoVegaraj:4a3VHPMRRpFiu2@cluster0.eiwvhmp.mongodb.net/Ultraman?retryWrites=true&w=majority"; 
   
  mongoose.connect (db).then(()=> 
    { 
    console.log("Connected to database"); 
      }).catch(()=>{ 
    console.log("Error Connecting to database"); 
   }) 
     
   //A schema matched the table in your database 
          
   const botsSchema = new mongoose.Schema ({ 
    catFact:{type:String},
    humanGender:{type:String}
    
   });
 
const fact = mongoose.model('app',botsSchema);
module.exports = fact;