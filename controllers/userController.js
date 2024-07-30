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
        try {
            const result = await userservice.getPreferences(user)
            console.log("🚀 ~ getPreferences: ~ result:", result)
            if(result.status == 'error'){
                res.status(404).json(result.message)
            }
             res.status(200).json(result.data)
            
        } catch (error) {
            res.json("get prefrences failed",error)

        }
    },
    updatePrefrence : async (req,res)=>{
        const preferences = req.body
        const userEmail = req.user
        try {
            const result = await userservice.updatePrefrence(userEmail,preferences)
            return res.json(result)
            
        } catch (error) {
            res.json("update prefrence failed", error)
            
        }
    }



}

module.exports = userController