import { Fragment, useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import api from '../lib/api';
import ReactTable from '../components/table';
import React, { useMemo } from 'react';




const BudgetForm = ({ selectDepartment }) => {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [data, setData] = useState({});

  const dateAdded = useMemo(
    () => [
      {
        Header: 'Budget',
        accessor: 'budget', // accessor is the "key" in the data
      },
      {
        Header: 'Date',
        accessor: 'dateAdded', // accessor is the "key" in the data
        Cell: ({ row: values  }) => (
          <div>
            {new Date(values.date).toDateString()}
          </div>
        ),
      },
   
    ],
    [],
  );


  // Fetching of data
  const fetchData = async () => {
    try {
      // Query to database
      const { data: result } = await api.get(`/api/subtract/${selectDepartment}`);

      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };
 

  // Trigger fetch on first load
  useEffect(() => {
    fetchData();
  }, []);


  // Handle form submission
  const handleOnSubmit = async () => {
    const { data: result } = await api.post('/api/saveBudget', {
      subtracted: data.subtracted,
      selectDepartment,
    });
   

    alert(result.message);// eslint-disable-line no-alert
  };
  // Form
  
  const renderForm = (
    <Form
      onSubmit={handleOnSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div
            className="justify-end items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className=" my-6 mx-auto w-auto">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-6 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-sm text-gray-500">
                    Update Total Cost
                  </h3>
                </div>
                {/* body */}
                <section className=" mx-auto  md:flex bg-base min-h-full  ">

                  <form onSubmit={handleSubmit} className="p-12 bg-white rounded-md my-16 w- mx-auto  w-full shadow-sm min-h-full  ">
                    <div className="grid grid-cols-3 gap-2">
                    <label htmlFor="selectDepartment" className="block p">
                        <span className="block  text-xs  text-gray-500 p">Total Budget</span>
                        <Field
                          className="text-xs mt-2 w-auto text-gray-500  placeholder-gray-400 focus:placeholder-gray-500
              placeholder-opacity-100 rounded-md border-gray-300   shadow-lg   "
                          name="totalBudget"
                          component="input"
                          type="number"
                          placeholder="₱"
                          disabled
                          initialValue={data.totalBudget || 0}
                        />
                           <span className="block  text-xs  text-gray-500 p">Date Added </span>
                        <Field
                          className="text-xs mt-2 w-auto text-gray-500  placeholder-gray-400 focus:placeholder-gray-500
              placeholder-opacity-100 rounded-md border-gray-300   shadow-lg   "
                          name="add_date"
                          component="input"
                          type="date"
                          disabled
                          initialValue={data.add_date}
                        />
     
                      </label>
                      <label htmlFor="selectDepartment" className="block p">
                        <span className="block  text-xs  text-gray-500 p">Total Cost</span>
                        <Field
                          className="text-xs mt-2 w-auto text-gray-500  placeholder-gray-400 focus:placeholder-gray-500
              placeholder-opacity-100 rounded-md border-gray-300   shadow-lg   "
                          name="totalCost"
                          component="input"
                          type="number"
                          placeholder="₱"
                          disabled
                          initialValue={data.totalCost || 0}
                        />
                                           <span className="  text-2xl  text-gray-500 p">=</span>
                      </label>
                    
                      <label htmlFor="selectDepartment" className="block p">
                        <span className="block  text-   text-gray-500 p">Remaining Budget</span>
                        <Field
                          className="text-sm mt-2 w-auto text-gray-500  font-semibold  border-0
               rounded-md bg-gray-100"
                          name="totalSubtracted"
                          component="input"
                          type="number"
                          placeholder="₱"
                          disabled
                          initialValue={data.subtracted || 0}
                        />
                      </label>
                    </div>
              {/* <ReactTable data={time} columns={dateAdded} /> */}

                  </form>
                </section>
                {/* footer */}
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-secondary text-white text-xs active:bg-emerald-600
                         px-6 py-3 rounded shadow-md "
                    type="button"
                    onClick={() => setIsModelOpen(false)}
                  >
                    Close
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />

        </form>
      )}
    />
  );

  return (
    <>
      {isModalOpen && renderForm}
      <button
        className=" bg-secondary text-white  text-xs p-1 px-6 rounded"
        type="button"
        onClick={() => setIsModelOpen(true)}
      >
        View Summary
      </button>
    </>
  );
};

export default BudgetForm;
