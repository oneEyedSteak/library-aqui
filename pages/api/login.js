import mysql from '../../providers/mysql';

export default async function (req, res) {
    try {
        const { uname, 
            password } = req.body;

  
         await mysql.query(`SELECT username, password FROM users WHERE uname ='${uname}' && password ='${password}'`)

        await mysql.end()

        res.status(200).json({ message: 'Succesfully Created' });
    } catch (error) {
        res.status(400).json({ message: 'Error' });
    }
}