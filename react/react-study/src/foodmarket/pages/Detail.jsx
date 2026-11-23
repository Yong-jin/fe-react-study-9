import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from 'react';
import './Detail.css';

function Detail({ foods }) {



    //--------------------------------------
    /*
        useEffect 훅 (Hooks)

        useEffect(실행할함수, 의존성배열)

        useEffect(실행할함수, [])   빈배열 -> 생성시에만 실행
        useEffect(실행할함수) -> 모든 로딩될때 실행 (생성, update)
        useEffect(실행할함수, [count]) -> count 값이 바뀔때마다 실행
        useEffect(실행할함수, [a,b,c]) -> a,b,c 중에 하나라도 값이 바뀔때마다 실행

        useEffect(실행할함수(){
            return ()=>{ clean up function }    //unmount 시 실행할 함수
        }, 의존성배열)

    */

    let [orderCount, setOrderCount] = useState(0);
    let [test, setTest] = useState(0);

    useEffect(() => {
        console.log("useEffect 함수 실행. (의존성배열 없음)");
    }) //의존성배열X -> 매번 실행

    useEffect(() => {
        console.log("useEffect 함수 실행. [] 빈 의존성 배열 의존");
    }, [])  //빈배열 -> 생성/로딩시 1회 실행

    useEffect(() => {
        console.log("useEffect 함수 실행. [orderCount] : " + orderCount);

        return () => {       //clean up function
            console.log("useEffect 함수 실행. [orderCount] -> return () 함수 실행");
        }

    }, [orderCount]) //의존성배열에 있는 orderCount 값 -> 참고

    useEffect(() => {
        console.log("useEffect 함수 실행. [test] : " + test);
    }, [test]) //의존성배열에 있는 orderCount 값 -> 참고

    useEffect(() => {
        console.log("useEffect 함수 실행. [test, orderCount] ");
    }, [test, orderCount]) //의존성배열에 있는 orderCount 값 -> 참고



    let [viewStatus, setViewStatus] = useState('');

    useEffect(() => {

        //setTimeout(함수, 시간); 일정시간 후에 작동하도록 타이머거는 함수
        setTimeout(() => {
            setViewStatus('end');
        }, 300); //0.3 초   1000 : 1초 

    }, [])


    let [modalShow, setModalShow] = useState(true); //모달창 표시 여부 true | false

    //2초후에 Modal 창 자동으로 닫기
    useEffect(()=>{
        //modalShow  state변수값 true -> false

        const tm = setTimeout(()=>{
            setModalShow(false);
        }, 2000);   //2초 후 실행

        //clearTimeout(tm);
    }, [])

    
    useEffect(()=>{
        //setTimeout  일정 시간 후에 작동
        //setInterval 일정시간마다 반복으로 실행
        //비동기방식

        //clearTimeout
        //clearInterval
        
        const interv = setInterval(()=>{
            console.log('interval');
        }, 1000); //1초마다 실행

        //clean up function
        return ()=>{
            clearInterval(interv);
        }

    }, [orderCount])

    //--------------------------------------




    // 상세보기를 눌렀을때
    // 특정 상품의 상세정보를 보여주는 페이지

    // url 주소창 접속 경로   /detail/:id

    //  /detail/fd001    /detail/fd008

    // 상세보기를 누르면 -> /detail/id값 
    // id값으로 넘어온 값이 무엇이냐?  ---> foods 데이터 중에 id가 같은 상품 찾기

    // fd000 fd002   fd008 ???

    // :id 위치에 있는 값 접근
    let { id } = useParams();
    console.log(id);

    // id 하고 같은 id 가진 food 데이터 찾기

    // filter
    /* let food = foods.filter((food, index)=>{
        return food.id == id;
    }) */

    // find, findIndex
    let food = foods.find((food, index) => {          //fd001    {}
        return food.id == id;
    })
    // food.title

    let foodIndex = foods.findIndex((food, index) => {  //fd001    1
        return food.id == id;
    })

    // foods[foodIndex].title ;

    console.log(food);


    let navigate = useNavigate();

    // 해당 id 상품을 찾지 못했을 경우 필터링
    if (food == undefined || food == null) {
        return (
            <div>
                <h1>존재하지 않는 상품입니다.</h1>
                <h2>잘못된 접근입니다.</h2>
                <Button variant='info' onClick={() => {
                    navigate("/");
                }}>홈으로 돌아가기</Button>
            </div>
        )
    }

    // <div class="box bg-red container">
    return (
        <Container className={"start " + viewStatus}>
            <Row>
                <Col md={6}>
                    <img src={import.meta.env.BASE_URL + food.imgPath} style={{ width: '100%' }} />
                </Col>
                <Col md={6}>
                    <h4>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>

                    <div>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount - 1);
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount + 1);
                            console.log('onClick() 함수에서 출력 : ' + orderCount);
                        }}>+</Button>

                        {/* <button onClick={()=>{setTest(test+1);}}>test값증가</button> */}
                    </div>

                    <Button variant="primary">주문하기</Button>
                </Col>

            </Row>



            <Modal
                show={modalShow}
                onHide={()=>{ setModalShow(false); } }
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        어서오세요
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>우리 음식 좋습니다</h4>
                    <p>
                        많이 많이 담아서 구매해주세요~
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{ setModalShow(false); }}>Close</Button>
                </Modal.Footer>
            </Modal>





        </Container>
    )


}

export default Detail;