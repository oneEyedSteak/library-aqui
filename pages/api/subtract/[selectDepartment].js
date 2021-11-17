import mysql from '../../../providers/mysql';

export default async (req, res) => {
  try {
    const { selectDepartment } = req.query;

    const [cost] = await mysql.query(`SELECT sum(price) as totalCost FROM requestform where selectDepartment="${selectDepartment}"`);
    const [budget] = await mysql.query(`SELECT sum(budget) as totalBudget FROM add_budget where selectDepartment="${selectDepartment}"`);

    const totalBudget = budget.totalBudget || 0;
    const totalCost = cost.totalCost || 0;

    const subtracted = totalCost - totalBudget  ;
    console.log(selectDepartment, totalBudget, totalCost);

    return res.json({
      subtracted,
      totalBudget,
      totalCost,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Error' });
  }
};
