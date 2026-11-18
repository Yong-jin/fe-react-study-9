import './Quiz04.css';
import { useState } from 'react';


function Quiz04() {


    //3) 반복 횟수를 나타낸 숫자 한개만 담는 변수
    let [cnt, setCnt] = useState(2);  //5 5개  10 10개

    let arr = [];
    for(let i=0; i<cnt; i++){
        arr.push(<div className='box' key={i}>박스</div>);
    }

    return (
        <div>

            <div style={{ margin: '10px' }}>
                <button onClick={() => {
                    //박스 몇개인지 횟수를 나타내는 cnt 숫자값 + 1
                    setCnt(cnt+1);
                }}>추가</button>
            </div>

            <div>
                {arr}
            </div>

            <div>
                {
                    [...Array(cnt)].map(( _ , index)=>{
                        return <div className='box' key={index}>박스</div>
                    })
                }
            </div>

        </div>
    )


    //2) 반복횟수를 담당할 배열
    //let [arr, setArr] = useState([1,2,3,4,5,6,7]);
    /* let [arr, setArr] = useState([0,0]);

    return (
        <div>

            <div style={{ margin: '10px' }}>
                <button onClick={() => {
                    //박스가 추가 되는 기능
                    //단순 반복의 횟수 용도로 사용하는 arr 배열 -> 값 상관없이 갯수를 늘리기위해 추가
                    
                    //let temp = [...arr];
                    //arr.push(2);
                    let temp = [...arr, 1];   // [...[0,0], 1]    [ 0,0, 1] 
                    //let temp = [0, ...arr];   // [...[0,0], 1]    [ 0,0, 1] 
                
                    //temp.push( arr.length + 1 );  // 1 2 3 4 5 6 7 8 9 10 11 12 13

                    setArr(temp);
                    
                }}>추가</button>
            </div>

            <div>
                {
                    arr.map((value, index)=>{
                        return <div className='box' key={index}>박스</div>
                    })
                }
                
            </div>

        </div>
    ) */



    //1) box 요소로 이루어진 배열
    /* let [boxArr, setBoxArr] = useState([<div className='box'>박스</div>, <div className='box'>박스</div>]);

    return (
        <div>

            <div style={{margin:'10px'}}>
                <button onClick={()=>{
                    //박스가 추가 되는 기능
                    //배열에 요소 추가 (깊은복사)
                    let temp = [...boxArr];
                    temp.push(<div className='box'>박스</div>);
                    setBoxArr(temp);
                }}>추가</button>
            </div>

            <div>
                {boxArr}
            </div>

        </div>
    )    */
    {/* <div className='box'>박스</div>
        <div className='box'>박스</div> */ }


}

export default Quiz04;