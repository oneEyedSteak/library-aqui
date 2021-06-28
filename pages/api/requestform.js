import mysql from '../../providers/mysql';

export default async function (req, res) {
  try {
    const {
      date, rushornrush, authorName, title, edition, copvol, pubdate, pubName,
      pubAddress, recomby, position, chargeto, subject, enumtitle,
      notereqform, dealer, price, dated, sinumb, addedAs,
    } = req.body;

    await mysql.query(`INSERT INTO requestform(date, rushornrush, authorName, title, edition, copvol, pubdate, pubName, pubAddress, recomby, position, chargeto, subject, enumtitle, notereqform, dealer, price, dated, sinumb, addedAs) VALUES('${date}','${rushornrush}',
         '${authorName}','${title}','${edition}','${copvol}','${pubdate}','${pubName}','${pubAddress}','${recomby}','${position}','${chargeto}','${subject}' ,'${enumtitle}' ,'${notereqform}','${dealer}',
         '${price}','${dated}','${sinumb}','${addedAs}')`);

    await mysql.end();

    res.status(200).json({ message: 'Succesfully Created' });
  } catch (error) {
    res.status(400).json({ message: 'Error' });
  }
}
