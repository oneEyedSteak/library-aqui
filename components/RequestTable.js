const seeAllBooks = ({ books }) => (

  <table className="table p-4 bg-white shadow rounded-lg">
    <thead>
      <tr>
        <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
          Book ID
        </th>
        <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
          Title
        </th>
        <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
          Authors
        </th>
        <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
          Publication Date
        </th>
        <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
          Entry Date
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-gray-700">
        <td className="border p-4 dark:border-dark-5">
          {books.BookID}
          {books.EntryDate}
          {books.Title}
          {books.Author}
          {books.PublicationDate}
        </td>
      </tr>
    </tbody>
  </table>

);

export default seeAllBooks;
