import React from 'react';
import { Quote } from "../../types";
interface Props {
    quote: Quote;
}

const QuoteItem: React.FC<Props> = ({ quote }) => {

    return (
        <div className="card g-0 my-4">
            <div className="card-header">
                {quote.author}
            </div>
            <div className="card-body">
                <p className="card-text">
                    {quote.text}
                </p>
                <p>{quote.category}</p>
            </div>
        </div>
    );
};

export default QuoteItem;
