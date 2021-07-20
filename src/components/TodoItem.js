import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    let itemStyle = {
        display: "flex",
        justifyContent : "space-between",
        alignItems : "center",
        width :"50%",
        margin : "0 auto"
    }
    return (
        <>
        <div style={itemStyle}>
            <div className="container">
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
        
        </div>
        
        <hr />
        </>
    )
}
