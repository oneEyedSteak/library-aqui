import mysql from '../../providers/mysql';

export default async function (req, res) {
    try {
        const {EntryDate, BookID, Author, Title, NumberOfCopies, Edition,noteEntry ,PublicationDate } = req.body;

  
         await mysql.query(`INSERT INTO entry_books(EntryDate, BookID, Author, Title, NumberOfCopies, Edition, noteEntry, PublicationDate) VALUES('${EntryDate}','${BookID}',
         '${Author}','${Title}','${NumberOfCopies}','${Edition}','${noteEntry}','${PublicationDate}')`)

        await mysql.end()

        res.status(200).json({ message: 'Books successfully Entered' });
    } catch (error) {
        res.status(400).json({ message: 'Error' });
    }
}
