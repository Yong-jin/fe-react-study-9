import './Quiz06.css';
import { useState } from 'react';
import ColorBox from './ColorBox';

function Quiz06() {

    let [boxArr, setBoxArr] = useState(['red', 'blue', 'green', 'black', 'orange', 'pink', 'purple']);

    return (

        <div>
            <div>
                <button onClick={() => { setBoxArr(['red', ...boxArr]) }}>앞빨간박스추가</button>
                <button onClick={() => { setBoxArr(['blue', ...boxArr]) }}>앞파란박스추가</button>
                <button onClick={() => { setBoxArr(['green', ...boxArr]) }}>앞초록박스추가</button>

                <button onClick={() => { setBoxArr([...boxArr, 'red']) }}>뒤빨간박스추가</button>
                <button onClick={() => { setBoxArr([...boxArr, 'blue']) }}>뒤파란박스추가</button>
                <button onClick={() => { setBoxArr([...boxArr, 'green']) }}>뒤초록박스추가</button>

                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.shift();
                    setBoxArr(temp);
                }}>앞박스삭제</button>
                <button onClick={() => {
                    let temp = [...boxArr];
                    temp.pop();
                    setBoxArr(temp);
                }}>뒤박스삭제</button>
            </div>

            <div>
                {
                    boxArr.map((item, index) => {
                        return <div className='box' style={{ backgroundColor:item }}>
                            <button onClick={()=>{
                                //X를 누르면 해당 위치 박스 삭제 
                                //박스삭제 -> boxArr 에서 해당 인덱스에 있는 데이터삭제  ex)'black'  'red'

                                // boxArr setBoxArr  index
                                /* let temp = [...boxArr];
                                temp.splice(index, 1);
                                setBoxArr(temp); */
                                
                                /* let temp = [...boxArr];
                                temp = temp.filter((item, idx)=>{
                                    return idx != index;
                                })
                                setBoxArr(temp); */


                                setBoxArr(boxArr.filter((item, idx)=>idx != index))


                            }}>X</button>
                        </div>
                    })
                }
            </div>
            
            {/* // +@) 색상 박스를 컴포넌트화 */}
            <h3>+@) 색상 박스를 컴포넌트화</h3>
            <div>
                {
                    boxArr.map((item, index) => {
                        //내부에서 state배열에 있는 값 삭제할때 필요한 재료들 전달
                        return <ColorBox bgColor={item} boxArr={boxArr} setBoxArr={setBoxArr} index={index} 
                            deleteSelf={()=>{setBoxArr(boxArr.filter(( _ , idx)=>idx != index))}}
                        />
                    })
                }
            </div>


        </div>
    )
}

export default Quiz06;