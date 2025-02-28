/* eslint-disable*/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react';



function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState([0,0,0]);
  let copy = [...글제목];
  let good_cpy = [...좋아요];
  let [modal, setModal]=useState(false);
  let [title, setTitle]= useState(0);



  return (
    
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }>블로그임</h4>
      </div>

      
      <button onClick={()=>{
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
          }}>글제목변경</button> 
      {
        글제목.map(function(a, i){
          return (
          <div className='list'>
            <h4 onClick={()=> {setModal(!modal)}}>{글제목[i]}
              <span onClick={()=>{good_cpy[i] = good_cpy[i]+1; 좋아요변경(good_cpy)}}>👍</span>
              {good_cpy[i]}</h4>
            <p>2월 17일 발행</p>
          </div>)
        })
      }
      
      {
        modal == true ? <Modal color={'yellow'} 글제목={글제목} 글제목변경={글제목변경}/> : null
      }
      
      
      <hr></hr>

      <button onClick={ ()=>{
      copy.sort(); 글제목변경(copy)}}>정렬</button> 
    </div>
  )
}
//컴포넌트 만드는 법
//1. function 컴포넌트명 { return (원하는 html)}
//2. function App의 return 안에 <컴포넌트명/

function Modal(props) { //Modal은 컴포넌트.... 
  return ( 
    //<div>를 연속으로 쓰고싶은 경우.... 바깥에 <> </>로 감싸긔 ^_^
    <> 
      <div className='modal' style={{background : props.color}}>
          <h4>{props.글제목[props.title]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={()=>{let copy2 = [...props.글제목]; copy2[0]="여자요"; props.글제목변경(copy2);}}>modal글수정</button>
      </div>
    </>
  )
}

//수정 함 해봣더욤
export default App
