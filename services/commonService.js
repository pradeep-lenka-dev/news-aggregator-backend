const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/usersData.json');

const commonService = {

     readFile : async () => {
        try {
            const data = await fs.readFile(filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading data:', error);
            return [];
        }
    },
    
     writeFile : async (user) =>{
        try {
            await fs.writeFile(filePath,JSON.stringify(user,null,2),'utf8')
            return user
            
        } catch (error) {
            
        }
        
    }
}



module.exports = commonService;
