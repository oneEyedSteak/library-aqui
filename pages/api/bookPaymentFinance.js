import mysql from '../../providers/mysql';

export default async (req, res) => {
  try {
    const {
      requestID, approvalFinanceDatePayment, imageURL,
    } = req.body;

    await mysql.query(`UPDATE requestform SET approvalFinancePayment = 1, approvalFinanceDatePayment=('${approvalFinanceDatePayment}'), signatureFinance=('${imageURL}')  WHERE requestID=('${requestID}')`);

    await mysql.end();
    console.log();

    return res.status(200).json({ message: 'Succesfully Updated' });
  } catch (error) {
    // return res.status(400).json({ message: 'Error' });
    console.log(error);
  }
};
