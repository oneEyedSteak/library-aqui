import mysql from '../../providers/mysql';

export default async (req, res) => {
  try {
    const {
      entryDate, bookRef, requestID, status, price,
    } = req.body;

    await mysql.query(`UPDATE requestform SET approvalAcqui=('${status}'), entryDate=('${entryDate}'), price=('${price}'), bookRef=('${bookRef}') WHERE requestID=('${requestID}')`);
    console.log();

    await mysql.end();
    return res.status(200).json({ message: 'Succesfully Updated' });
  } catch (error) {
    return res.status(400).json({ message: 'Error' });
  }
};
