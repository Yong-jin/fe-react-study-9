import { Button, Card } from "react-bootstrap";
import food1 from '../img/food1.jpg';
import food2 from '../img/food2.jpg';
import food3 from '../img/food3.jpg';
import { useNavigate } from 'react-router';

//props   props.food.id
function FoodCard({ food, foods, index }) {

    let navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={food1} /> */}
            {/* http://localhost:5173/images/food9.jpg */}
            {/*   images/food9.jpg    */}
            {/*                          "http://localhost:5173/" + "images/food1.jpg"    */}
            {/* <Card.Img variant="top" src={"http://localhost:5173/" + food.imgPath} /> */}
            <Card.Img variant="top" src={ import.meta.env.BASE_URL + food.imgPath} />
            {/* <Card.Img variant="top" src={food.imgPath} /> */}
            <Card.Body>
                <Card.Title>{food.title}</Card.Title>
                <Card.Text>
                    {/* {food.content} */}
                    {foods[index].content}
                </Card.Text>
                <Card.Text>
                    {food.price}
                </Card.Text>
                <Button variant="primary"
                onClick={()=>{
                    // 상품 상세페이지 주소로 변환
                    // /detail/:id
                    navigate("/detail/" + food.id);
                }}>상세보기</Button>
            </Card.Body>
        </Card>
    )
}

export default FoodCard;