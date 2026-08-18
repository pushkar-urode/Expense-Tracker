import Expense from "../models/ExpenseModel.js";

export const addExpense = async (req, res) => {
    try {
        const { name, price } = req.body;

        const expense = await Expense.create({
            name,
            price,
            userId: req.userId,
        });

        res.status(201).json({
            message: "Expense added successfully",
            expense,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


export const getExpenses = async (req, res) => {
    try {

        const expenses = await Expense.find({
            userId: req.userId
        });

        res.status(200).json({
            expenses
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
export const updateExpense = async (req, res) => {
    try {
        const { name, price } = req.body;

        const expense = await Expense.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.userId
            },
            {
                name,
                price
            },
            {
                new: true
            }
        );

        if (!expense) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        res.status(200).json({
            message: "Expense updated successfully",
            expense
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


export const deleteExpense = async (req, res) => {
    try {

        const expense = await Expense.findOneAndDelete({
            _id: req.params.id,
            userId: req.userId
        });

        if (!expense) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        res.status(200).json({
            message: "Expense deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};