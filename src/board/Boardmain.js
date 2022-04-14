import React from "react";
import BoardForm from "./BoardForm";
import { useState } from "react";

function Create({todo, getValue, 등록}){
    const[isOpen, setIsOpen]=useState(false)

return(
<div className="글쓰기">
    <div className='글쓰기버튼'><button onClick={()=>setIsOpen(!isOpen)}>글쓰기</button></div>
    {isOpen?
    <div className="글쓰기내용">
      <div >
        <label>제목:<input size='30' name='title' value={todo.title} onChange={(e)=>getValue(e)}></input></label>
        <label>이름:<input size='10' name='writer' value={todo.writer} onChange={(e)=>getValue(e)}></input></label>
        <button onClick={(e)=>{등록(e);setIsOpen(!isOpen)}}>등록</button>
        <button onClick={()=>setIsOpen(!isOpen)}>취소</button>
      </div>
      <div>
        <textarea placeholder='내용을 입력하세요' name='content' value={todo.content} onChange={(e)=>getValue(e)}></textarea>
      </div>
      
    </div>:null}
</div>
)}

function Boardmain(){
    const [list, setlist]=useState([]);
    const [nextid,setnextid]=useState(1);
    const [todo, settodo]=useState({
        id:'',
        title:'',
        writer:'',
        content:'',
        date:'',
    })
    let today=new Date();
    let time={year: today.getFullYear(),  //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
    hours: today.getHours(), //현재 시간
    minutes: today.getMinutes(), //현재 분
    }
    let timestring = `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`;

    
    function getValue(e){ //이벤트 발생 시, 그 이벤트의 name과 value를 가져옴
        const {name, value}=e.target;
        settodo({...todo, id:nextid, [name]:value,
        date:timestring}) //list의 내용을 복사해서, 그 안에 name이란 이름의값을 value로 바꿔저장
    }
    
    
    function 등록(e){
        setlist([todo, ...list]);
        setnextid(nextid+1);
        settodo({
            title:'',
            writer:'',
            content:'',
        })
        console.log(todo, list)
    }
/*        <div className='bottom' key={v.id}> */
    let inputlist=list.length>0?list.map((v,i)=>
           <BoardForm v={v}/>):"게시글이 없습니다."

    return(<>
        <div className="boardlist">
            <div className="top">
                <div className="num">번호</div>
                <div className="title">제목</div>
                <div className="writer">작성자</div>
                <div className="date">작성일</div>
                <div className="count">조회수</div>
            </div>
            {inputlist}
        </div>
        <Create todo={todo} getValue={getValue} 등록={등록}/>
    </>    
    )
}
export default Boardmain;