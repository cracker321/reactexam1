
//[ 컴퍼넌트에 데이터를 '객체로' 전달하는 방법 props ]
//사용되는 상황:
//'컴퍼넌트 App'에서 '컴퍼넌트 Counter2'를 임포트해와 사용하는데, 이 때 'Counter2의 초기값'을 '0'이 아닌,
//'다른 값(컴퍼넌트 App이 자체적으로 전달하는 값)'으로 사용하라고 명령할 때 등의 상황에서 사용함

//cf) '부모컴퍼 내부의 모든 종류의 속성들'은 다~ '자식컴퍼'에게 '전달할 수 있다'.



//[ 상태 state ]
//리액트의 '상태 state'를 사용하기 위해서는, react를 임포트해줘야 하고,
//'메소드 {useState}': 상태를 사용하기 위해서는, 이 '메소드 useState'를 사용해야 함.
import React,{useState} from "react";


//< 컴퍼넌트 Counter2 >
//컴퍼넌트는 '함수 자신이 가진 상태 state가 변화'하면, 화면을 다시 그려 rerender를 한다.
//즉, '함수 Counter가 다시 호출된다'!!

//< 컴퍼넌트에 데이터를 전달하는 방법 props >
//- '자식컴퍼인 컴퍼 Counter2의 매개변수'로
//  '부모컴퍼인 컴퍼 App의 js부분에 정의된 변수 counterProps이 담고 있는 객체의 속성 initialValue'를 넣어주면,
//  '자식컴퍼인 컴퍼 Counter2의 내부'에서 '그 속성 initialValue'를 사용할 수 있게 됨.
//  즉, '변수 counterProps 객체의 속성 중 initialValue만 쏙 뽑아 쓴 것'임.
//  그 전달 과정에서 '비구조화 할당'을 사용한 것임.

//'객체의 속성들 중 일부인 '속성 initialValue' 1개만 props로 전달받는 것일지라도,
//무조건 아래처럼 '그 속성을 객체로 감싸서(중괄호{})' 받아와야 한다!!!
const Counter2 = ({initialValue}) =>{


    //아래처럼 '속성 initialValue'를 '객체로 감싸지 않고 콘솔 찍었을 때'와, '객체로 감싸서 콘솔 찍었을 때'의 차이점을
    //계속 콘솔 찍어가면서 비교해보면 된다!
    // console.log(initialValue,"initial")
    // console.log({initialValue},"initial2")

    // console.log(props);
    //
    //
    // console.log("counter 호출!!") //'함수 자신이 가진 상태 state가 변화'
    // //즉, 화면에서 개발자도구의 아래 'Console'부분을 확인하면 된다.
    // //증감버튼 누를 때마다 '함수 Counter'가 반복해서 호출(화면에 보여짐)되어서,
    // //그에 따라, 'counter 호출!!'이라는 글자가 계속해서 호출됨.


    //===========================================================================================

    //0에서 출발
    //1씩 증가하고
    //1씩 감소하는
    //count 상태

    //< 상태 1 >
    //- '리액트의 메소드인 useState'는 '배열을 반환'하고, 배열의 비구조화 할당을 통해서,
    // '인덱스 [0]을 count', '인덱스 [1]을 setCount'라는 '상수'로 받아오는 메소드임.
    //  'count'와 'setCount'는 '상수(1, 2, 3 등..)'라는 것 명심!
    //- '메소드 setCount': '상태변화 함수'로 기능함.
    //- '0': 초기값('0'에서 출발하는 것)
    //const [count, setCount] = useState(0);

    //
    // const [count, setCount] = useState(props.initialValue);

    //'컴퍼 App의 js부분에 정의된 변수 counterProps이 담고 있는 객체의 속성 initialValue'를
    const [count, setCount] = useState(initialValue);

    //===========================================================================================

    //< '상태 1'의 1씩 증가시키는 함수 >

    const onIncrease =()=>{

        setCount(count + 1); //- 'setCount의 인자값': 위 변수 'const [count, setCount] =...'의 'count'를 인자값으로 바꿔줌.
        //만약, 'setCount(100)'으로 설정했으면, 저 위에서의 count는 100이 됨.
    };


    //===========================================================================================
    //< '상태 1'의 1씩 감소시키는 함수 >

    const onDecrease =()=>{
        setCount(count -1);
    }



//======================================= return문 ===============================================
//리턴문에 아무것도 작성하지 않으면 에러난다!


    return (

        <div>
            {/*첫 번째 증감버튼*/}
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>

        </div>
    );
};

//'위에서의 함수 Counter2의 매개변수로' '부모컴퍼인 컴퍼 App의 counterProps 객체의 속성 중 initialValue'를 전달받았는데,
//내가 실수로, '컴퍼 App의 counterProps 객체의 속성에 initialValue를 작성하는 것을 까먹었을 경우 또는 까먹을 것 같은 경우',
//아래처럼 'defaultProps'를 설정해주면, 위와 같은 경우이더라도 'initialValue'가 여기서 임의로 설정한 디폴트값 0으로 설정된다.
Counter2.defaultProps={
    initialValue: 0
}

export default Counter2;