import React, { useState } from "react";

export const TodoList = (props) => {
    const { item, index, handleDelete, setTodoList } = props;
    const [isEdit, setIsEdit] = useState(false);
    const container_style = {
        minWidth: "520px",
        padding: "5px 10px",
        borderBottom: "1px solid #ccc",
        textAlign: "start",
        display: "flex",
        justifyContent: "space-between",
    };
    const handleEditChange = (e) => {
        const { value } = e.target;
        setTodoList(prev => (prev.map((list, Index) => index === Index ? value : list)));
    };

   
    console.log(item);
    return (
        <div style={container_style}>
            {isEdit ? <input type="text" onChange={handleEditChange} value={item} /> : <p>{item}</p>}
            <div>
                <button onClick={() => setIsEdit(!isEdit)}>Edit</button>{" "}
                <button onClick={()=>handleDelete(index)}>Delete</button>
            </div>
        </div>
    );
};
