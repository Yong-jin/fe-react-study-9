import { useState } from "react";
import './Quiz01.css';
//useState 
// 버튼 -> 이벤트 등록 -> state변수 값 증가 -> 재렌더링

function Quiz01(){

    //let count = 0; 
    let [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={()=>{
                //count + 2 씩 증가
                setCount( count +2 );
            }}>짝수출력</button>
            {/* <span style={{color:'red'}}>{count}</span> */}
            <span className="quiz01-font-red">{count}</span>

        </div>
    )
}

export default Quiz01;