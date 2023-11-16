import React from 'react'

const BookDetails = ({ book }) => {
    return (
        book && (
            <div>
                <h1>{book.bookName}</h1>
                <h3>{book.writer}</h3>
                <p>{book.description}</p>
            </div>
        )
    )
}

export default BookDetails