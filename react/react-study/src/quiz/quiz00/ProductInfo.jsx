//각종 데이터 import 

import { shopName, shopAddress, shopPhone } from "./shopData";

/* import { shopAddress } from "./shopData";
import { shopName } from "./shopData";
import { shopPhone } from "./shopData"; */


import {product1, product2, product3, price1, price2, price3 } from './productData';

import totalPrice from "./productData";

function ProductInfo(){


    return (
        <div>
            <h1>온라인 쇼핑몰</h1>

            <p>쇼핑몰명 : {shopName}</p>
            <p>주소 : {shopAddress}</p>
            <p>전화번호 : {shopPhone}</p>

            <h2>상품 목록</h2>

            <p>상품1 : {product1}</p>
            <p>가격 : {price1}</p>

            <p>상품2 : {product2}</p>
            <p>가격 : {price2}</p>

            <p>상품3 : {product3}</p>
            <p>가격 : {price3}</p>

            <p>------------------------</p>
            <p>총 상품 금액 : {totalPrice}원</p>
        </div>
    )
}

export default ProductInfo;

/*
온라인 쇼핑몰

쇼핑몰명 : 코딩전자
주소 : 서울시 강남구
전화번호 : 02-1234-5678

상품 목록

상품1 : 노트북
가격 : 1200000원

상품2 : 키보드
가격 : 80000원

상품3 : 마우스
가격 : 35000원

------------------------
총 상품 금액 : 1315000원
*/


/* productData.js와 shopData.js에서 필요한 데이터를 import하여 화면에 출력하세요.

조건
1) default import와 named import를 모두 사용하세요.
2) 상품명과 가격을 각각 출력하세요.
3) 세 상품의 총금액을 출력하세요.
4) 쇼핑몰 이름, 주소, 전화번호를 출력하세요.
5) ProductInfo 컴포넌트는 default export 하세요. */

