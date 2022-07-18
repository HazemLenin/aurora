import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { remove_messages } from '../../actions';

function Message(props) {
    const dispatch = useDispatch();
    
    function generateClasses(variant) {
        switch (variant) {
            case "danger":
                return "bg-red-200 border-red-500";

            case "success":
                return "bg-teal-100 border-teal-500";
        }
    }

    return <>
        <div className={`${props.isFirst && 'flex justify-between items-center'} w-full border-l-8 p-5 ${generateClasses(props.variant)} text-black`}>
            <div>
                {props.message}
            </div>
            {props.isFirst && <button className="btn-secondary w-40" onClick={e => dispatch(remove_messages())}>Clear all</button>}
        </div>
    </>
}

export default Message;