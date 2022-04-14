import React from "react";
import {useState} from 'react'

/*만약 이폼을 boardmain에 작성, map후단에 작성하면 usestate의 status가 공통으로 
먹혀서 모든 게시글의 내용이 같이 보였다말았따말았다한다.*/
function BoardForm({v}){
    const [status,setstatus]=useState(false);
    const [count,setcount]=useState(0);
    function statushandler(){
        setcount(status?count:count+1) //status가 true면 count+1됨
        setstatus(!status);

    }
    return(<>
        <div className='bottom' key={v.id}>
        <div className="num">{v.id}</div>
        <div onClick={()=>{statushandler()}} className="title">{v.title}</div>
        <div className="writer">{v.writer}</div>
        <div className="date">{v.date}</div>
        <div className="count">{count}</div>
        </div>
        <div className={status?'content':'hidden'}><span>{status?v.content:null}</span></div>
        </>
    )
}
export default BoardForm;