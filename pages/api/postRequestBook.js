import mysql from '../../providers/mysql';



const { date, rushornrush, authorName, title, edition, copvol, pubdate, pubName, pubAddress, recby, recomby, chargeto, subject, enumtitle, notereqform, dealer, price,dated, sinumb, addedAs} = req.body;


export default async function (_, res) {
    try {

        const result = await mysql.query ('SELECT * FROM entry_books');
        // const { date, rushornrush, authorName, title, edition, copvol, pubdate, pubName, pubAddress, recby, recomby, chargeto, subject, enumtitle, notereqform, dealer, price,dated, sinumb, addedAs} = req.body;

  
        //  await mysql.query(`INSERT INTO requestform(date, rushornrush, authorName, title, edition, copvol, pubdate, pubName, pubAddress, recby, recomby, chargeto, subject, enumtitle, notereqform, dealer, price, dated, sinumb, addedAs) VALUES('${date}','${rushornrush}',
        //  '${authorName}','${title}','${edition}','${copvol}','${pubdate}','${pubName}','${pubAddress}','${recby}','${recomby}','${chargeto}','${subject}' ,'${enumtitle}' ,'${notereqform}','${dealer}',
        //  '${price}','${dated}','${sinumb}','${addedAs}')`)

        // await mysql.end()

       return res.json(result)
       
    } catch (error) {
        res.status(400).json({ message: 'Error' });
    }
}





