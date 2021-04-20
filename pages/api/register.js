import mysql from '../../providers/mysql';

export default async function (req, res) {
    try {
        const { uname, fname, mname, lname, password, email, pnumber } = req.body;

  
         await mysql.query(`INSERT INTO users(username, fname, mname, lname, password, email, pnumber) VALUES('${uname}',
          '${fname}', '${mname}', '${lname}', '${password}', '${email}', '${pnumber}')`)

        await mysql.end()

        res.status(200).json({ message: 'Succesfully Created' });
    } catch (error) {
        res.status(400).json({ message: 'Error' });
    }
}