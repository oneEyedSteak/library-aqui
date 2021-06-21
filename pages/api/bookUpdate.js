import mysql from '../../providers/mysql';

export default async (req, res) => {
  try {
    const {
      entryDate, bookRef, requestID, status,
    } = req.body;

    await mysql.query(`UPDATE requestform SET status=('${status}'), entryDate=('${entryDate}'), bookRef=('${bookRef}') WHERE requestID=('${requestID}')`);

    await mysql.end();

    return res.status(200).json({ message: 'Succesfully Updated' });
  } catch (error) {
    return res.status(400).json({ message: 'Error' });
  }
};
