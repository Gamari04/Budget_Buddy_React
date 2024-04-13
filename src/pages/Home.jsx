import http from "../http";
import { useState, useEffect } from "react";

export default function Home() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchAllExpenses();
    }, []);

    const fetchAllExpenses = () => {
        http.get('/expenses').then(res => {
            setExpenses(res.data);
        });
    };

    return (
        <div>
            <h2>All Expenses</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={expense.id}>
                            <td>{expense.name}</td>
                            <td>{expense.description}</td>
                            <td>{expense.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
