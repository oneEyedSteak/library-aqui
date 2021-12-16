import Head from 'next/head';
import { Form, Field } from 'react-final-form';
import React, { useMemo } from 'react';
import axios from 'axios';
import api from '../lib/api';
import ReactTable from '../components/table';
import BudgetForm from './budget-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getServerSideProps = async () => {
  const { data: cost } = await api.get('/api/totalCost');
  const { data: budget } = await api.get('/api/postTotalBudget');
  const { data: timeAdded } = await api.get('/api/postTotalBudget');
  

  console.log(cost, budget, timeAdded);
  return {
    props: {
      totalCost: cost,
      totalBudget: budget,
      timeAdded:timeAdded,
    },
  };
};

export default function SignIn({ totalCost, totalBudget, timeAdded }) {

  Date.prototype.toDateInputValue = (function () {
    const local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  });

  const postBudget = useMemo(
    () => [
      {
        Header: 'Department',
        accessor: 'selectDepartment', // accessor is the "key" in the data
      },
      {
        Header: 'Total Budget',
        accessor: 'sum(budget)', //
        Cell: ({ row: { values } }) => `₱${values['sum(budget)']}`, // accessor is the "key" in the data
      },

    ],
    [],
  );

  console.log(totalCost);
  const postCost = useMemo(
    () => [
      {
        Header: 'Department',
        accessor: 'selectDepartment', // accessor is the "key" in the data
      },
      {
        Header: 'Total Cost',
        accessor: 'sum(price)', // accessor is the "key" in the data
        Cell: ({ row: { values } }) => `₱${values['sum(price)']}`,
      },
      {
        Header: () => 'Action',
        accessor: 'action',
        Cell: ({ row: { values } }) => <BudgetForm selectDepartment={values.selectDepartment} />,
      },
    ],
    [],
  );

  const handleOnSubmit = async (payload) => {
    const { data } = await axios.post('/api/saveBudget', payload);
  
  
    toast.success('Added Successfuly!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    }, data);

  };

  return (
    <>
      <Head>
        <title>Library Acquisition | Input Budget </title>
        <meta name="keywords" content="someting" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <section className=" mx-auto  md:flex bg-base  min-h-screen ">

        <Form
          onSubmit={handleOnSubmit}
          render={({ handleSubmit }) => (

            <form onSubmit={handleSubmit} className=" px-8 pt-8 pb-8 bg-white rounded-md my-16  mx-auto h-auto w-full shadow-lg  ">
              {/* MODAL ENDS HERE */}
              <Field
                className="text-gray-500 rounded-md  border-gray-300  w-auto
                    focus:placeholder-gray-700 focus:border-gray-500 placeholder-gray-700 placeholder-opacity-50 bg-gray-50"
                name="dateAdded"
                component="input"
                type="hidden"
                initialValue={new Date().toDateInputValue()}
                required
              />
              <div className="flex-shrink-0 flex content-around items-center">

                <img className="hidden lg:block h-14 w-auto  mr-3" src="/cpulogo.png" alt="okay" />
                <img className="block lg:hidden h-14 w-auto  mr-3" src="/cpulogo.png" alt="cpu logo" />
                <h1 className="text-xl  text-gray-600 ">Budget From Departments</h1>
              </div>

              <div className="grid grid-cols-3  gap-4 mt-4">

                <div className="">
                  <label htmlFor="selectDepartment" className="block p">
                    <span className="block  text-xs  text-gray-500 p">Select Department</span>
                    <Field name="selectDepartment" component="select" className="rounded-md  text-xs  text-gray-500 border-gray-300 space -space-y-1 w-full mt-1" required>
                      <option value="">Select Department</option>
                      <option className="text-xs  text-gray-500" value="College of Agriculture">College of Agriculture</option>
                      <option className="text-xs  text-gray-500" value="College of Arts & Sciences">College of Arts & Sciences</option>
                      <option className="text-xs  text-gray-500" value="College of Business & Accountancy">College of Business & Accountancy</option>
                      <option className="text-xs  text-gray-500" value="College of Computer Studies">College of Computer Studies</option>
                      <option className="text-xs  text-gray-500" value="College of Education">College of Education</option>
                      <option className="text-xs  text-gray-500" value="College of Engineering">College of Engineering</option>
                      <option className="text-x text-gray-500" value="College of Hospitality Management">College of Hospitality Management</option>
                      <option className="text-xs  text-gray-500" value="College of Medical Laboratory Science">College of Medical Laboratory Science</option>
                      <option className="text-xs text-gray-500" value="College of Nursing">College of Nursing</option>
                      <option className="text-xs  text-gray-500" value="College of Pharmacy">College of Pharmacy</option>
                      <option className="text-xs  text-gray-500" value="College of Law">College of Law</option>
                      <option className="text-xs text-gray-500" value="College of Medicine">College of Medicine</option>
                      <option className="text-xs text-gray-500" value="College of Theology">College of Theology</option>
                      <option className="text-xs text-gray-500" value="Kinder">Kinder</option>
                      <option className="text-xs text-gray-500" value="Elementary">Elementary</option>
                      <option className="text-xs text-gray-500" value="High School">High School</option>
                      <option className="text-xs text-gray-500" value="Senior High School">Senior High School</option>
                    </Field>
                  </label>

                  <label htmlFor="budget" className="block pb-2">
                    <span className="block text-xs   text-gray-500 ">Budget</span>
                    <Field
                      className="text-xs  text-gray-500  placeholder-gray-400 focus:placeholder-gray-500
                  placeholder-opacity-100 rounded-md border-gray-300 w-full shadow-sm  "
                      name="budget"
                      component="input"
                      type="number"
                      placeholder="₱"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="  mx-auto text-center  cursor-pointer py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md
                text-white bg-secondary hover:bg-indigo-700
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                  >
                    Add
                  </button>
                </div>
                <div className="text-xs shadow-md ">
                  <label htmlFor="selectDepartment" className="block ">
                    <span className="block  text-xs  text-gray-500 "> Budget</span>

                    <ReactTable data={totalBudget} columns={postBudget} />
                  </label>
                </div>
                <div className="text-xs shadow-md w-auto">
                  <label htmlFor="selectDepartment" className="block ">
                    <span className="block  text-xs  text-gray-500 "> Remaining</span>
                    <ReactTable data={totalCost} columns={postCost}  className="w-auto"/>
                  </label>
                </div>
              </div>

            </form>
          )}
        />

      </section>
    </>
  );
}
