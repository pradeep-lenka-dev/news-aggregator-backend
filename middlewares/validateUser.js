const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const validateFields =  (reuiredfield) =>{
    return (req,res,next)=>{
        const errors = [];
        reuiredfield.forEach(field => {
            const value = req.body[field]
            if(!value){
                errors.push(`${field} is required`);
            }else if (field === 'password' && !passwordRegex.test(value)) {
                errors.push('Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character');
            }
            
        });
        if(errors.length >0){
            return res.status(400).json({ errors });
        }
        next()
    }
   
 }

 module.exports = validateFields