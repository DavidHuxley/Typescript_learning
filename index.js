// 지정할 수 있는 타입은 string, number, boolean, null, undefined, any, bigint, []배열, {}오브젝트 등이 있다.
var ex_Name;
// ex_Name = 123;
// 변수 ex_Name의 타입을 string으로 지정했기 때문에 숫자를 대입하면 에러가 발생한다.
ex_Name = 'Jane';
var ex_Name2 = ['John', 'jane'];
// 배열의 경우에는 타입을 지정해주지 않으면 배열 안에 어떤 타입이든 들어갈 수 있다.
// ex_Name2 라는 변수는 string[] 타입이기 때문에 배열 안에는 string 타입만 들어갈 수 있다.
var ex_Info;
// 오브젝트의 경우에는 타입을 지정해주지 않으면 오브젝트 안에 어떤 타입이든 들어갈 수 있다.
// ex_info 라는 변수는 { name : string, age? : number} 타입이기 때문에 오브젝트 안에는 name은 string 타입, age는 number 타입만 들어갈 수 있다.
// age? 는 age가 있어도 되고 없어도 된다는 의미이다.
ex_Info = { name: 'John', age: '이십' };
ex_Info = { name: 'John', age: 20 };
// ex_info = { age : 32};
// 따라서 위의 ex_info는 정상적으로 대입되었지만 아래의 ex_info는 name이 없기 때문에 에러가 발생한다.
// 다양한 타입이 들어올 수 있게 하려면 Union Type을 사용한다.
var ex_Name3;
// ex_Name3 라는 변수는 string | number 타입이기 때문에 string 타입이나 number 타입만 들어갈 수 있다.
ex_Name3 = 'Jane';
ex_Name3 = 123;
// 이런식으로 타입을 미리 지정해둔다면 위의 예시 ex_Info를 아래와 같이 사용할 수 있다.
var ex_Info2;
var ex_Info3;
ex_Info3 = { name: 'park', age: '이십사' };
ex_Info3 = { name: 'park', age: 24 };
// 함수의 경우에는 파라미터와 리턴값의 타입을 지정해줄 수 있다.
function ex_function(x, y) {
    return x * y;
}
// ex_function 함수는 파라미터 x와 y의 타입을 number로 지정해주었고 리턴값의 타입도 number로 지정해주었다.
ex_function(1, 2);
var ex_function2;
ex_function2 = function (x, y) {
    return x * y;
};
// Member 라는 타입은 number와 boolean 타입을 가진 배열이다.
var ex_Member = [1, true];
// let ex_Member2 : Member = ['23', 12];
