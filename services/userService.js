
const { readFile, writeFile,decryptData } = require('./commonService')
const bcrypt = require('bcrypt')
const path = require('path');
const jwt = require('jsonwebtoken')

const userservice = {

    registerNewUser: async (user) => {
        const hasPassword = await bcrypt.hash(user.password, 10)
        const result = await readFile()
        if (result.find((users) => users.email === user.email)) {
            console.log("user alredy exist")
            return ("user alredy exist")
        }else{

            user.password = hasPassword
            result.push(user)
            await writeFile(result)
            return (user) ;
        }


    },

    loginUser: async (user) => {

        const usersData = await readFile();
        const existingUser = usersData.find((u) => u.email === user.email);

        if (!existingUser) {
            return { status: "failed", message: 'Invalid email or password' };
        }

        const isPasswordValid = await bcrypt.compare(user.password, existingUser.password);
        if (!isPasswordValid) {
            return { status: "failed", message: 'Invalid password' };
        }

        const token = jwt.sign({ email: user.email }, 'secretKey', { expiresIn: '1h' });

        return { status: 'success', message: 'User logged in successfully', token };
    }

}

module.exports = userservice