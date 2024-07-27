const userservice = require ('../services/userService')
const userController = {

     registerNewUser : async (req,res)=>{
       const user = req.body
       try {
           const result = await userservice.registerNewUser(user)
           res.status(200).json(result);
       } catch (error) {
        res.json(error)
       }
    },

    loginUser: async (req,res)=>{
        const user = req.body

        try {
            const result = await userservice.loginUser(user)
            res.status(200).json(result)
            
        } catch (error) {            
            res.json("user logedin failed",error)
        }

    },
    getPreferences: async (req,res)=>{
        const user = req.user
        console.log("🚀 ~ getPreferences: ~ Authorization:", user)
        try {
            const result = await userservice.getPreferences(user)
            return res.json(result)
            
        } catch (error) {
            
        }
    }



}

module.exports = userController