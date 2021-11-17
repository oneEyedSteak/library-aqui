import mysql from '../../../providers/mysql';

export default async (req, res) => {
  try {
    const { BookEnterID } = req.query;

    const [result] = await mysql.query(`SELECT * FROM requestform WHERE approvalPresident = 1 AND
    approvalDirector = 1 and approvalFinance = 1 AND approvalAcqui = 1  AND requestID='${BookEnterID}'`);

    return res.json(result);
  } catch (error) {
    // return res.status(500).json({ message: 'Error' });
    console.log(error);
  }
};
