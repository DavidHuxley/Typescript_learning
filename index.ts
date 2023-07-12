// 지정할 수 있는 타입은 string, number, boolean, null, undefined, any, bigint, []배열, {}오브젝트 등이 있다.

let ex_Name :string;
// ex_Name = 123;
// 변수 ex_Name의 타입을 string으로 지정했기 때문에 숫자를 대입하면 에러가 발생한다.
ex_Name = 'Jane';

let ex_Name2 :string[] = ['John', 'jane'];
// 배열의 경우에는 타입을 지정해주지 않으면 배열 안에 어떤 타입이든 들어갈 수 있다.
// ex_Name2 라는 변수는 string[] 타입이기 때문에 배열 안에는 string 타입만 들어갈 수 있다.

let ex_Info :{ name : string, age? : string | number};
// 오브젝트의 경우에는 타입을 지정해주지 않으면 오브젝트 안에 어떤 타입이든 들어갈 수 있다.
// ex_info 라는 변수는 { name : string, age? : number} 타입이기 때문에 오브젝트 안에는 name은 string 타입, age는 number 타입만 들어갈 수 있다.
// age? 는 age가 있어도 되고 없어도 된다는 의미이다.
ex_Info = { name : 'John', age : '이십'};
ex_Info = { name : 'John', age : 20};
// ex_info = { age : 32};
// 따라서 위의 ex_info는 정상적으로 대입되었지만 아래의 ex_info는 name이 없기 때문에 에러가 발생한다.

// 다양한 타입이 들어올 수 있게 하려면 Union Type을 사용한다.
let ex_Name3 :string | number;
// ex_Name3 라는 변수는 string | number 타입이기 때문에 string 타입이나 number 타입만 들어갈 수 있다.
ex_Name3 = 'Jane';
ex_Name3 = 123;
// ex_Name3 = true;
// 따라서 위의 ex_Name3는 정상적으로 대입되었지만 아래의 ex_Name3는 boolean 타입이기 때문에 에러가 발생한다.

// 타입을 변수에 담아서 사용할 수도 있는데 이를 Type Alias라고 한다.
// 타입명은 일반적으로 대문자로 시작한다.
type Ex_Info_Type = string | number;
// 이런식으로 타입을 미리 지정해둔다면 위의 예시 ex_Info를 아래와 같이 사용할 수 있다.
let ex_Info2 : { name : string, age : Ex_Info_Type};
// 한단계 더 간단하게 만들수도 있다.
type Ex_Info_Type2 = { name : string, age : Ex_Info_Type};
let ex_Info3 : Ex_Info_Type2;

ex_Info3 = { name : 'park', age : '이십사'};
ex_Info3 = { name : 'park', age : 24};

// 함수의 경우에는 파라미터와 리턴값의 타입을 지정해줄 수 있다.
function ex_function(x: number, y:number) : number {
    return x * y;
}
// ex_function 함수는 파라미터 x와 y의 타입을 number로 지정해주었고 리턴값의 타입도 number로 지정해주었다.
ex_function(1, 2);
// ex_function(1, '2');
// 위와같이 ex_function 함수의 파라미터에 지정한 타입이 아닌 값을 넣으면 에러가 발생한다.

// 함수 역시 타입을 미리 지정해둔다면 위의 예시 ex_function를 아래와 같이 사용할 수 있다.
type Ex_function_Type = (x: number, y:number) => number;
let ex_function2 : Ex_function_Type;
ex_function2 = (x: number, y:number) : number => {
    return x * y;
}
// ex_function2 = (x: number, y:number) : string => {
//     return x * y;
// }
// 위와같이 ex_function2 함수의 리턴값의 타입을 number가 아닌 string으로 지정하면 에러가 발생한다.

// 아래와 같은 경우를 array에 사용할 수 있는 tuple이라고 한다.
type Member = [number, boolean];
// Member 라는 타입은 number와 boolean 타입을 가진 배열이다.
let ex_Member : Member = [1, true];
// let ex_Member2 : Member = ['23', 12];

