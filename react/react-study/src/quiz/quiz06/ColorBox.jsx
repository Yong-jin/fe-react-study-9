

//배경색이 들어가는 박스를 컴포넌트화

// 호출부 : <ColorBox bgColor="red"/>
// function ColorBox(props){    props.bgColor
function ColorBox({ bgColor, boxArr, setBoxArr, index, deleteSelf }) {  //deleteSelf:자기자신 데이터를 지우는 함수
    return (
        <div className='box' style={{ backgroundColor: bgColor }}>
            <button onClick={() => {
                // boxArr setBoxArr  index
                /* let temp = [...boxArr];
                temp.splice(index, 1);
                setBoxArr(temp); */

                /* let temp = [...boxArr];
                temp = temp.filter((item, idx)=>{
                    return idx != index;
                })
                setBoxArr(temp); */

                setBoxArr(boxArr.filter(( _ , idx) => idx != index))

            }}>X</button>
            <button onClick={deleteSelf}>함수로X</button>
        </div>
    )
}

export default ColorBox;