import React from "react";
// JSX / TSX:
// JSX(Javascript XML), TSX(Typescript XML)
// XML의 형태와 유사 DOM 트리를 생성 JS, TS 확장자

// 컴포넌트:
// 화면에 표시되는 하나의 단위 요소
// 각각의 독립적인 상태와 로직을 가지고 있음
// 클래스형 컴포넌트, 함수형 컴포넌트가 존재
// 클래스형 컴포넌트는 최근엔 사용하지 않음

// 컴포넌트 선언 방법
// 1. class 컴포넌트
// - class 키워드로 컴포넌트 작성
// - React 패키지의 Component클래스를 상속하여 구현
// - render() 메서드의 반환값으로 렌더링하고자 하는 요소를 반환
// - 하나의 컴포넌트를 클래스의 인스턴스로 관리

// - 클래스형 컴포넌트를 더 이상 사용하지 않는 이유
// - React 16.8버전 부터 Hook 함수로 컴포넌트의 생명 주기를 다룰 수 있게 되면서
// 클래스로 복잡하게 관리할 필요X
// - 함수형 컴포넌트에 비해서 코드가 복잡함, 가독성, 코드 간결성의 문제로 사용X
// - js의 this 키워드의 바인딩 문제 때문에 적절한 결과를 나타내지 못하는 경우가 발생
export class ClassComponent extends React.Component{
    render() {
        return (
            <h1>클래스형 컴포넌트</h1>
        )  
    }
}

// 2. function 컴포넌트
// - 함수로 컴포넌트를 정의
// - 반드시 첫글자를 대문자로 작성하는 UpperCamelCase 사용해야 컴포넌트로 인식
// - 함수의 반환값으로 렌더링하고자 하는 요소를 반환

export function FunctionalComponent(){
    return (
        <h1>함수형 컴포넌트</h1>
    )
}

// VSCode Es7+ React/Redux/React-native snippets 확장 설치 후
// 단축 명령으로 react에 해당되는 코드를 작성할 수 있음

// 클래스형 컴포넌트: rcc 단축 명령으로 생성
// 클래스 이름 = 파일의 이름과 동일하게 생성
// import React, { Component } from 'react'

// export default class Component extends Component {
//   render() {
//     return (
//       <div>Component</div>
//     )
//   }
// }

// 함수형 컴포넌트: rfc 단축 명령으로 생성 가능
// 함수명 = 파일명과 동일하게 작성

// import React from 'react'

// export default function Component() {
//   return (
//     <div>Component</div>
//   )
// }

export default function Component() {

    // 함수형 컴포넌트의 return
    // - 해당 컴포넌트가 렌더링할 요소를 반환
    // - HTML과 유사하나 그렇지 않음
    // - 여러가지 자바 스크립트 *연산자*를 사용할 수 있음

    // - 반드시 하나의 요소만 반환 가능(0개 X, 2개 이상 X)
    // - 만약 다수의 요소를 반환하고 싶다면 최상단에 부모 요소로 묶어줘야 함
    // - <></>를 이용하여 부모요소로 사용하면 자식을 묶는 용도로 사용가능
    
    // - 반드시 return 바로 뒤에 반환값이 위치해야함

    // JSX(TSX)의 규칙
    // 1. 반드시 하나의 요소를 반환해야함
    // 2. 모든 태그를 닫아야 함
    // 3. 속성들을 JSX로 지정된 이름만 사용(lowerCamelCase)
    // 4. 주석을 사용할 땐 {자바스크립트 주석}을 사용
    return (
        <>
            {/* <input className=""></input> */}
            <div>Component</div>
            <div>Component2</div>
        </>
    )

    // return (
    // <div>
    //     <h1>H1</h1>
    //     <h2>H2</h2>
    // </div>
    // )
}

