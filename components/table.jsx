import { useTable } from 'react-table';

const Table = ({
  data,
  columns,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <table className="min-w-full divide-y divide-gray-200" {...getTableProps()}>
      <thead className="bg-gray-50 dark:bg-primary-dark">
        {headerGroups.map((headerGroup) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              // eslint-disable-next-line no-nested-ternary
              const isSorted = column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : '';

              return (
                <th
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...column.getHeaderProps({
                    className: column.className || `text-gray-900 dark:text-white px-6 py-3 text-left text-xs
                      uppercase tracking-wider dark:bg-primary-dark cursor-pointer`,
                  })}
                >
                  {column.render('Header')}
                  <span>
                    {isSorted}
                  </span>
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody
        className="bg-white divide-y divide-gray-200 text-sm
                  dark:bg-base-dark dark:divide-gray-600"
        {...getTableBodyProps()}
      >
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              key={i}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...row.getRowProps({
                className: row.className || 'hover:bg-gray-200 dark:hover:bg-gray-700',
              })}
            >
              {row.cells.map((cell) => (
                <td
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...cell.getCellProps({
                    className: cell.className || 'px-6 py-4',
                  })}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
