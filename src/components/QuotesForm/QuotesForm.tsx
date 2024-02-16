import React, { useState } from 'react';
import { Quote } from "../../types";
import axiosApi from "../../axiosApi";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    onSubmit: (quote: Quote) => void
}

const QuotesForm: React.FC<Props> = ({ onSubmit }) => {

    const [loading, setLoading] = useState(false);

    const [quote, setQuote] = useState({
        category: '',
        author: '',
        text: '',
    });

    const changeQuote = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setQuote(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const newQuote: Quote = {
            id: uuidv4(),
            ...quote,
        };

        try {
            await axiosApi.post('/quotes.json', newQuote);
            onSubmit(newQuote);
        }  finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={onFormSubmit}>
            <h2>Submit new quote</h2>
            <div className="form-group my-3">
                <label htmlFor="category" className="mb-2">Category</label>
                <select
                    name="category"
                    id="category"
                    className="form-control"
                    value={quote.category}
                    onChange={changeQuote}
                >
                    <option value="About">About</option>
                    <option value="Contact">Contact</option>
                    <option value="Division">Division</option>
                    <option value="Resources">Resources</option>
                    <option value="Prices">Prices</option>
                </select>
            </div>
            <div className="form-group my-3">
                <label htmlFor="author" className="mb-2">Author</label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    className="form-control"
                    value={quote.author}
                    onChange={changeQuote}
                />
            </div>
            <div className="form-group my-3">
                <label htmlFor="text" className="mb-2">Text</label>
                <textarea
                    name="text"
                    id="text"
                    className="form-control"
                    value={quote.text}
                    onChange={changeQuote}
                />
            </div>
            <button type="submit" className="btn btn-outline-dark mt-3" disabled={loading}>
                Save
            </button>
        </form>
    );
};

export default QuotesForm;
