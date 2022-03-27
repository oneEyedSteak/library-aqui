import mysql from '../../../providers/mysql';

export default async (req, res) => {
  try {
    const {
       budget, selectDepartment,
    } = req.body;

      await mysql.query(`UPDATE add_budget SET budget = "${budget}" WHERE selectDepartment = "${selectDepartment}"`);
    await mysql.end();

    return res.status(200).json({ message: 'Succesfully Updated' });
  } catch (error) {
    console.log(error);
  }
};
