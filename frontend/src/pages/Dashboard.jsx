import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const Dashboard = () => {

    const navigate = useNavigate();

    // Database se aane wale expenses
    const [expenses, setExpenses] = useState([]);

    // MongoDB se expenses fetch karna
    useEffect(() => {

        const getExpenses = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/expenses`,
                    {
                        method: "GET",

                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    console.log(data.message);
                    return;
                }

                setExpenses(data.expenses);

            } catch (error) {
                console.log(error);
            }
        };

        getExpenses();

    }, []);


    // Total Expense
    const totalExpense = expenses.reduce((total, expense) => {
        return total + expense.price;
    }, 0);


    // Logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const handleDelete = async (expenseId) => {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/expenses/${expenseId}`,
            {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        // Deleted expense ko screen se bhi remove karo
        setExpenses((previousExpenses) => {
            return previousExpenses.filter(
                (expense) => expense._id !== expenseId
            );
        });

        console.log(data.message);

    } catch (error) {
        console.log(error);
    }
};

const handleUpdate = async (expense) => {
    try {

        const newName = prompt(
            "Enter new expense name:",
            expense.name
        );

        if (newName === null) {
            return;
        }

        const newPrice = prompt(
            "Enter new price:",
            expense.price
        );

        if (newPrice === null) {
            return;
        }

        const token = localStorage.getItem("token");

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/expenses/${expense._id}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },

                body: JSON.stringify({
                    name: newName,
                    price: Number(newPrice)
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        // Updated expense ko screen par update karo
        setExpenses((previousExpenses) => {
            return previousExpenses.map((item) => {

                if (item._id === expense._id) {
                    return data.expense;
                }

                return item;
            });
        });

        console.log(data.message);

    } catch (error) {
        console.log(error);
    }
};

    return (
        <>
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">

                <a className="font-semibold">
                    Expense Tracker
                </a>

                <div className="flex items-center gap-5 text-gray-500">

                    <p>
                        Hi! User
                    </p>

                    <Link to="/">
                        <button
                            className="border rounded-full text-sm px-4 py-1 cursor-pointer"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </Link>

                </div>

            </div>


            {/* Total Expense */}
            <div className="bg-slate-100 py-8 border">

                <h1 className="font-semibold py-2 px-8 text-2xl">
                    Total Expense
                </h1>

                <span className="font-semibold py-8 px-8 text-3xl">
                    ${totalExpense}
                </span>

            </div>


            {/* Expenses */}
            {expenses.map((expense) => (

                <div
                    key={expense._id}
                    className="py-5 px-7 flex items-center gap-6 border mt-5 bg-slate-100"
                >

                    <span className="font-semibold text-gray-900 w-15">
                        {expense.name}
                    </span>

                    <span className="font-semibold text-gray-900 w-32">
                        ${expense.price}
                    </span>


                    {/* Buttons */}
                    <div className="ml-auto flex items-center gap-3 ">

                        <button
                         onClick={() => handleUpdate(expense)}
                            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium 
                            hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
                        >
                            Update
                        </button>

                        <button
                             onClick={() => handleDelete(expense._id)}
                            className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium 
                            hover:bg-red-600 active:scale-95 transition cursor-pointer"
                        >
                            Delete
                        </button>

                    </div>

                </div>

            ))}


            {/* Add Expense Button */}
            <div>

                <Link to="/dashboard/create">

                    <button
                        className="fixed bottom-20 right-20 group px-8 py-2.5 bg-indigo-600 rounded-lg text-white 
                        cursor-pointer active:scale-95 transition duration-300 hover:bg-indigo-700"
                    >

                        <p className="relative h-6 overflow-hidden">

                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                Add Expense
                            </span>

                            <span className="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-[-100%]">
                                $
                            </span>

                        </p>

                    </button>

                </Link>

            </div>
            </div>
        </>
    );
};

export default Dashboard;