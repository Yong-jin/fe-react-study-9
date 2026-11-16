
//<Box text={"아침"} detail={"졸리다"} />
// props = { text:"아침", detail:"졸리다"}

//<Box title={"아침"} detail={"졸리다"} />
// props = { title:"아침", detail:"졸리다"}

/*
function Box( props ){
        // props  : 컴포넌트에서 사용할 매개변수
    return (
        <div style={{backgroundColor:'lightgreen'}}>
            <h1>{props.title}</h1>
            <h2>{props.detail}</h2>
        </div>
    )
}
*/

// props = { title:"아침", detail:"졸리다"}
// props.title  props.detail
// let {title, detail} = { title:"아침", detail:"졸리다"}
// title  detail
// let [a, b, c] = [10,20,30];


function Box( {title, detail} ){
        // props  : 컴포넌트에서 사용할 매개변수
    return (
        <div style={{backgroundColor:'lightgreen', margin:'10px'}}>
            <h1>{title}</h1>
            <h2>{detail}</h2>
        </div>
    )
}


export default Box;