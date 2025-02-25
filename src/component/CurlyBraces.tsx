import React from "react";

export default function CurlyBraces() {
    // Curly Braces"
    // - JSX에서 자바 스크립트 표현식을 작성할 때 사용하는 방법
    // - JSX 안에 {  }로 영역을 지정하여 자바스크립트 코드를 작성

    const title = 'Curly Braces';

    const array = ['apple', 'banana', 'cacao'];
    const object = {name: '이성계', ho: '태조'};

    const inputProp = {
        type: 'text',
        placehoder: '리액트 컴포넌트',
        readOnly: false
    };

    // 1. 요소의 컨텐츠의 자바스크립트의 표현식 결과를 사용하고자 할 때
    // 2. 주석 처리 - JSX에서는 html 주석 사용X, JS 주석 사용
    // 3. 속성의 값을 지정할 때 (변수 형태로)
    //      -JSX에서 인라인 스타일을 문자열 X, 객체로 표현
    // 4. 배열은 각 요소를 나열하면서 렌더링 되지만, 객체는 직접 렌더링 불가
    // 5. 선언문, 제어문을 사용할 수 없음+
    // 6. 스프레드 연산자로 객체를 속성에 바로 지정 가능

    return (
        
        <>
        <h1 style={{
        backgroundColor: 'black',
        color: 'white'
        }}>
        제목: {title}</h1>
        <div>{1 + 2}</div>
        <table>
            <tr>
                <td rowSpan={2}></td>
            </tr>
        </table>
        <div>{array}</div>
        <div>{object.name}</div>
        <input type={inputProp.type} placeholder={inputProp.placehoder} readOnly={inputProp.readOnly}/>
        <input {...inputProp}/>
        </>
    )
}
 