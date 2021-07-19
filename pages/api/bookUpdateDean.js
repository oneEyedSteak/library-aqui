import mysql from '../../providers/mysql';

export default async (req, res) => {
  try {
    const {
      approvalDateDean, requestID, approvalDean,
    } = req.body;

    await mysql.query(`UPDATE requestform SET approvalDean=('${approvalDean}'), approvalDateDean=('${approvalDateDean}') WHERE requestID=('${requestID}')`);

    await mysql.end();
    console.log();

    return res.status(200).json({ message: 'Succesfully Updated' });
  } catch (error) {
    return res.status(400).json({ message: 'Error' });
  }
};
