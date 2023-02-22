//[ 구조 분해 할당 ]
//https://chanhuiseok.github.io/posts/js-10/
//https://ko.javascript.info/destructuring-assignment




//===============================================================================================================


//< '배열'에서의 구조 분해 할당 >

const name = ["유종", "아라", "재균", "원희", "승훈", "지훈", "성직"];

const [cho1, cho2, cho3, choi1, choi2="성팔", ...rest] = name;

console.log(choi2); //출력값: '승훈'. 'choi2="성팔"'이라고 적혀있어도, 이미 '변수 name의 5번째 원소에 '승훈'이 있어서,
                    //              '승훈'이 더 우선순위로 오는 것 같음.
console.log(cho2); //출력값: '아라'
console.log(rest); //출력값: '지훈', '성직. '변수 name의 원소는 총 7개'이고, 여기 위에서는 '원소 5개만 명시'해줬기 떄문에,
                   //       나머지 2개를 출력해주는 것.


//===============================================================================================================

//< '객체'에서의 구조 분해 할당 >

const person1 = {
    name: "yujong",
    age: 32,
    gender: "male",
    location: "seoul",
    memo: "Hi there",
};

// const {age, gender, memo} = person1;
//
// console.log(age); //출력값: 32
// console.log(gender); //출력값: male
// console.log(memo); //출력값: Hi there


const {age: myAge, gender, memo} = person1; //'person1 객체의 속성 age'를 '내가 만든 새로운 변수 myAge'에 담음
console.log(myAge); //출력값: 32
console.log(gender); //출력값: male
console.log(memo); //출력값: Hi there









