

//배경색이 들어가는 박스를 컴포넌트화

// 호출부 : <ColorBox bgColor="red"/>
// function ColorBox(props){    props.bgColor
function ColorBox( {bgColor} ){
    return (
        <div className='box' style={{ backgroundColor:bgColor }}></div>
    )
}

export default ColorBox;