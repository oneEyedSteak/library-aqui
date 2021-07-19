import mysql from '../../providers/mysql';

export default async function (req, res) {
  try {
    const {
      date, rushornrush, authorName, title, edition, copvol, pubdate, pubName,
      pubAddress, recomby, position, chargeto, subject, enumtitle,
      notereqform, dealer, price, dated, sinumb, addedAs , userID, requestee,selectDepartment, selectPosition
    } = req.body;

    await mysql.query(`INSERT INTO requestform( date, rushornrush, authorName, title, edition, copvol,
       pubdate, pubName, pubAddress, recomby, position, chargeto, subject, enumtitle, notereqform, dealer, 
       price, dated, sinumb, addedAs, userID, requestee, selectDepartment, selectPosition) VALUES('${date}','${rushornrush}',
         '${authorName}','${title}','${edition}','${copvol}','${pubdate}','${pubName}','${pubAddress}',
         '${recomby}','${position}','${chargeto}','${subject}' ,'${enumtitle}' ,'${notereqform}','${dealer}',
         '${price}','${dated}','${sinumb}','${addedAs}', '${requestee}' , '${userID}', '${selectDepartment}','${selectPosition}')`);

    await mysql.end();

    res.status(200).json({ message: 'Succesfully Created' });
  } catch (error) {
    res.status(400).json({ message: 'Error' });
    console.log(error)

  }
}
