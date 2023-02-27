import React from 'react';

const Select = (props) => {
    const { title, name, id, data } = props?.data;
    const { disabled, onChange } = props;
    return (
        <>
            <h4>{title}</h4>
            <select name={name} id={id} disabled={disabled} onChange={onChange}>
                <option value="">{title}</option>
                {data.map((item) => <option key={item.value} value={item.value}>{item.name}</option>)}
            </select>
        </>
    )
}

export default Select
