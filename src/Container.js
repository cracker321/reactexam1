//컴퍼넌트를 감쌀 컴퍼넌트인 '컴퍼 Container'
//'컴퍼 App'의 내부에 위치하여, '컴퍼 Container'가 '컴퍼 App 내부의 사용되는 모든 컴퍼넌트들을 감싸는 것(자식컴퍼로 삼는 것)'


const Container = ({children}) =>{


    return (<div style={{margin:20, padding:20, border:"1px solid gray"}}>{children}</div>);
};

export default Container;