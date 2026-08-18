import React, { useState } from "react";
import { useNavigate } from "react-router";

const AddExpense = () => {

    const navigate = useNavigate();

    const [expenseName, setExpenseName] = useState("");
    const [expensePrice, setExpensePrice] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const token = localStorage.getItem("token");

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/expenses/add`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },

                    body: JSON.stringify({
                        name: expenseName,
                        price: Number(expensePrice)
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            console.log(data);

            navigate("/dashboard");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="py-20 flex flex-col justify-between items-center bg-white">

            <form
                onSubmit={handleSubmit}
                className="w-full md:p-10 p-4 space-y-5 max-w-lg"
            >

                {/* Expense Name */}
                <div className="flex flex-col gap-1 max-w-md">

                    <label
                        className="text-base font-medium"
                        htmlFor="product-name"
                    >
                        Add Expense
                    </label>

                    <input
                        id="product-name"
                        type="text"
                        placeholder="Type here"
                        value={expenseName}
                        onChange={(event) =>
                            setExpenseName(event.target.value)
                        }
                        className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                        required
                    />

                </div>


                {/* Description */}
                <div className="flex flex-col gap-1 max-w-md">

                    <label
                        className="text-base font-medium"
                        htmlFor="product-description"
                    >
                        Description
                    </label>

                    <textarea
                        id="product-description"
                        rows={1}
                        className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
                        placeholder="Type here"
                    />

                </div>


                {/* Price */}
                <div className="flex items-center gap-5 flex-wrap">

                    <div className="flex-1 flex flex-col gap-1 w-32">

                        <label
                            className="text-base font-medium"
                            htmlFor="product-price"
                        >
                            Cost
                        </label>

                        <input
                            id="product-price"
                            type="number"
                            placeholder="0"
                            value={expensePrice}
                            onChange={(event) =>
                                setExpensePrice(event.target.value)
                            }
                            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                            required
                        />

                    </div>

                </div>


                <button
                    type="submit"
                    className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded"
                >
                    ADD
                </button>

            </form>

        </div>
    );
};

export default AddExpense;