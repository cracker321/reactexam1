//'부모컴퍼 Counter' 내부에 있는 '동적인 데이터'인 '상태(state)' 'count'가 현재 홀수인지 아니면 짝수인지를
//실시간으로 알려주는 새로운 기능을 만드는 것
//따라서, 아래 '부모컴퍼 Counter의 속성 중 하나인 count'를 '자식컴퍼 oddEvenResult'에게 전달하는데,
//그 방법은 '자식컴퍼 OddEvenResult의 매개변수'로 '속성 count'를 받아오는 것임.
const OddEvenResult =({count})=>{

    console.log(count);

    return <>{count % 2 === 0 ? "짝수" : "홀수"}</>
}

export default OddEvenResult;
