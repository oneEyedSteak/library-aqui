import mysql from '../../providers/mysql';

export default async function (req, res) {
  try {
    const {
      budget, selectDepartment, add_date
    } = req.body;

    await mysql.query(`INSERT INTO add_budget( budget,selectDepartment, add_date ) VALUES('${budget}','${selectDepartment}','${add_date}')`);

    await mysql.end();

    res.status(200).json({ message: 'Succesfully Created' });
    console.log();
  } catch (error) {
    res.status(400).json({ message: 'Error' });
    console.log(error);
  }
}
