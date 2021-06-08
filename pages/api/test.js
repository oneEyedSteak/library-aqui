import mysql from '../../providers/mysql';
import nextConnect from 'next-connect';
import multer from 'multer';

const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads',
        filename: (req, file, cb) => cb(null, file.originalname),
    }),
});

const test = nextConnect({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

test.use(upload.array('theFiles'));

test.post((req, res) => {

    try {
        const { EntryDate, BookID, Author, Title, NumberOfCopies, Edition, PublicationDate, image } = req.body;


         mysql.query(`INSERT INTO entry_books(EntryDate, BookID, Author, Title, NumberOfCopies, Edition, PublicationDate, image) VALUES('${EntryDate}','${BookID}',
         '${Author}','${Title}','${NumberOfCopies}','${Edition}','${PublicationDate}','${image}')`)

         mysql.end()

        res.status(200).json({ message: 'Succesfully Created' });
    } catch (error) {
        res.status(400).json({ message: 'Error' });
    }
});

export default test;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};