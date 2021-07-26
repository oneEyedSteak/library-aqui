import mysql from '../../providers/mysql';

export default async (_, res) => {
  try {
    const result = await mysql.query('SELECT * FROM requestform WHERE approvalAcqui = 1 ');

    return res.json(result);
  } catch (error) {
    return res.status(400).json({ message: 'Error' });
  }
};
