import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from 'react';

function Detail( {foods} ){



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

    useEffect(()=>{
        console.log("useEffect 함수 실행. (의존성배열 없음)");
    }) //의존성배열X -> 매번 실행

    useEffect(()=>{
        console.log("useEffect 함수 실행. [] 빈 의존성 배열 의존");
    }, [])  //빈배열 -> 생성/로딩시 1회 실행

    useEffect(()=>{
        console.log("useEffect 함수 실행. [orderCount] : " + orderCount);
    }, [orderCount]) //의존성배열에 있는 orderCount 값 -> 참고

    useEffect(()=>{
        console.log("useEffect 함수 실행. [test] : " + test);
    }, [test]) //의존성배열에 있는 orderCount 값 -> 참고

    useEffect(()=>{
        console.log("useEffect 함수 실행. [test, orderCount] ");
    }, [test, orderCount]) //의존성배열에 있는 orderCount 값 -> 참고


    //--------------------------------------




    // 상세보기를 눌렀을때
    // 특정 상품의 상세정보를 보여주는 페이지

    // url 주소창 접속 경로   /detail/:id

    //  /detail/fd001    /detail/fd008

    // 상세보기를 누르면 -> /detail/id값 
    // id값으로 넘어온 값이 무엇이냐?  ---> foods 데이터 중에 id가 같은 상품 찾기

    // fd000 fd002   fd008 ???

    // :id 위치에 있는 값 접근
    let {id} = useParams();
    console.log(id);

    // id 하고 같은 id 가진 food 데이터 찾기

    // filter
    /* let food = foods.filter((food, index)=>{
        return food.id == id;
    }) */

    // find, findIndex
    let food = foods.find((food, index)=>{          //fd001    {}
        return food.id == id;
    })
    // food.title

    let foodIndex = foods.findIndex((food, index)=>{  //fd001    1
        return food.id == id;
    })

    // foods[foodIndex].title ;

    console.log(food);


    let navigate = useNavigate();

    // 해당 id 상품을 찾지 못했을 경우 필터링
    if( food == undefined || food == null) {
        return (
            <div>
                <h1>존재하지 않는 상품입니다.</h1>
                <h2>잘못된 접근입니다.</h2>
                <Button variant='info' onClick={()=>{
                    navigate("/");
                }}>홈으로 돌아가기</Button>
            </div>
        )
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={ import.meta.env.BASE_URL + food.imgPath} style={ {width:'100%'} } />
                </Col>
                <Col md={6}>
                    <h4>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>

                    <div>
                        <Button variant="dark" onClick={()=>{
                            setOrderCount(orderCount-1);
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={()=>{
                            setOrderCount(orderCount+1);
                            console.log('onClick() 함수에서 출력 : ' + orderCount);
                        }}>+</Button>

                        {/* <button onClick={()=>{setTest(test+1);}}>test값증가</button> */}
                    </div>

                    <Button variant="primary">주문하기</Button>
                </Col>

            </Row>
        </Container>
    )


}

export default Detail;