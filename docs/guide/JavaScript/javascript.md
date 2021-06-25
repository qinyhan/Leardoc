## 1、基本数据类型

### String	字符串

* 在字符串中可以使用`\`作为转义字符，当表示一些特殊符号时可以使用`\`进行转义

    * `\"`	表示`"`
    * `\'`	表示`'`
    * `\n`	表示`换行`
    * `\t`	表示`制表符(table键)`
    * `\\`	表示`\`

* 例如：

    ```js
    str = "我说：\"今天天气不错\"";
    ```

    

### Number	数字

#### 注意

* 使用JS进行浮点数运算时，可能会得到一个不精确的结果`0.1 + 0.2 = 0.30000000000000004`，因此不推荐在JS中进行对精确度要求较高的运算

#### API

* 数字超出最大值(正无穷)：	`Infinity`

* 数字最大值表示：	`Number.MAX_VALUE`

* 数字最小值表示：	`Number.MIN_VALUE`

* `NaN`	表示不是一个数字(`Not a Numver`)

* Demo

    ```js
    var num = Infinity
    console.log(typeof num)	//	number
    ```

    

### Boolean	布尔

### Null & Undefined

* Null	空值，用来表示一个为空的`对象`
* Undefined	未定义的值，当声明一个标量，但并未给变量赋值时，当前变量就是`Undefined`

## 2、强制类型转换

### **String 强制类型转换**

* 1、调用被转换数据类型的`toString()`方法，该方法不会影响到原变量

    * `Null` 和 `Undefined` 两个值没有 `toString()`方法

    ```js
    var num = 123;
    var str = num.toString()
    console.log(typeof num)
    console.log(typeof str)
    ```

* 2、调用`String()`函数，并将被转换的数据作为参数传递给函数

    * 对于 `Number` 和 `Boolean` 实际上调用的是 `toString() `方法
    * 对于 `Null` 和 `Undefined`，就不会调用 `toString() `方法，则将会之间做字符串转换

    ```js
    var num = 123
    var str = String(num)
    console.log(typeof num)
    console.log(typeof str)
    ```

### **Number 强制类型转换**

*   `Number()`函数
    *   如果字符串为一个空值或者多个空值，则`Number()`函数将转换为`0`
    *   布尔类型
        *   true	转换为	1
        *   false	转换为	0
    *   Null	转换为	0
    *   Undefined	转换为	`NaN`
*   parse
    *   `parseInt()`函数
        *   将字符串中有效的整数内容取出来进行转换
    *   `parseFloat()`函数
        *   可以获得有效的小数进行转换
    *   对于非`String`使用`parseInt()` 或 `parseFloat()`，将会先将其转换为`String`再进行操作

### `Boolan`布尔值强制类型转换

*   数字转布尔，除了`0`和`NaN`以外都为`true`

    ```js
    console.log(123)	//	true
    console.log(-123)	//	true
    console.log(0)	//	false
    console.log(Infinity)	//	true
    console.log(NaN)	//	false
    ```

*   字符串转布尔，除了`空字符串`和`Null`以及`Undefined`以外都为`true`

*   对象也会转换为`true`

## **3、进制数转换**

*   表示`16进制数`则需要以`0x`开头

*   表示`8进制数`则需要以`0`开头

*   表示`2进制数`则需要以`0b`开头，但不是所有的浏览器都支持（IE不支持）

    ```js
    console.log('0b10')
    ```

### 注意

*   有些浏览器（IE）中字符串会当成`8进制数`解析，有些则会当成`10进制数`解析

    ```js
    console.log('070')	//	IE 56	//	Chrome	火狐	70
    ```

*   解决方式

    *   可以在`parseInt()`中传递一个第二个参数，来指定数组的进制数

        ```js
        var str = '070'
        console.log(str, 10)	//	表示十进制数解析
        ```


## **4、运算符**

### `+`加号运算符

*   隐式类型转换（任意的数据类型 `+ ""`都会被转换为字符串类型）

    ```js
    var num = 123
    var str = 123 + ''
    console.log(typeof num)
    console.log(typeof str)
    ```

### `-`减号运算符

*   除了`加法`运算符以外，剩下的运算符都会被转换为`Number`类型

    *   任何值做`-、*、/`运算时，都会自动转换为`Number`类型

    ```js
    var num = 100 - '1'
    var num1 = 2 * '8'
    var num2 = 8 / '2'
    console.log(typeof num)
    console.log(typeof num1)
    console.log(typeof num2)
    ```

## **5、运算符优先级表**

```js
1.	.、[]、new
2.	()
3.	++、--
4.	!、~、+(单目)、-(单目)、typeof、void、delete
5.	%、*、/
6.	+(双目)、-(双目)
7.	<<、>>、>>>
8.	<、<=、>、>=
9.	==、!==、===
10.	&
11.	^
12.	|
13.	&&
14.	||
15.	?:
16.	=、+=、-=、*=、/=、%=、<<=、>>=、>>>=、&=、^=、|=
17.	,
```

```js
var result = 1 || 2 && 3
console.log(result)
```



## 6、**一元运算符**

### `+`正号

```js
var num = 123
num = +num
var result = 1 + +'2' + 3
console.log(num) ==> console.log("num = " + num)	//	num = 123
console.log('result=' + result)	//	result =  6
```

### `-`负号

```js
var num = 123
num = +num
console.log(num) ==> console.log("num = " - num)	//	num = -123
```

## 7、**自增和自减**

### 自增

*   使变量在自身的基础上增加`1`，变量自增后，原变量会立即自增1

#### `num++`

*   `num++`的值等于原变量的值**`（自增以前的值）`**

    ```js
    var num = 1
    num++
    console.log(num) ==> console.log('num = ' num + 1)
    ```

#### `++num`

*   `++num`的值等于原变量的新值**`（自增以后的值）`**

### 自减

*   使变量在自身的基础上减`1`

## **8、递增和递减**

```js
+=
    num += 5 ==> num = num + 5
-=
    num -= 5 ==> num = num - 5
*=
    num *= 5 ==> num = num * 5
/=
    num /= 5 ==> num = num / 5
%=
    num %= 5 ==> num = num % 5
```

## **Unicode编码表**

*   [编码表地址]

### 在网页中使用Unicode编码

*   网页中使用Unicode编码需要使用`10进制数`

    ```html
    <h1>&#9760;</h1>	<!--等同于	console.log('\u2620')-->
    ```

## 9、嵌套for循环

###	使用嵌套for循环画出图形

* 外层的for循环用来控制图形的高度，内层的for循环用来控制图形宽度

* 外层的for循环执行一次，内层的for循环就会执行n（n根据给定的值）次

* 假设外层的 key 为 i，内层的 key 为 j

* | 个数      | 行数 |   执行条件    | 当前外层key值 |
    | :-------- | :--: | :-----------: | :-----------: |
    | *         |  1   |     j < 1     |     i = 0     |
    | * *       |  2   |     j < 2     |     i = 1     |
    | * * *     |  3   |     j < 3     |     i = 2     |
    | * * * *   |  4   |     j < 4     |     i = 3     |
    | * * * * * |  5   |     j < 5     |     i = 4     |
    | 个数      | 行数 |   执行条件    | 当前外层key值 |
    | * * * * * |  1   | j < 5 (5 - 0) |     i = 0     |
    | * * * *   |  2   | j < 4 (5 - 1) |     i = 1     |
    | * * *     |  3   | j < 3 (5 - 2) |     i = 2     |
    | * *       |  4   | j < 2 (5 - 3) |     i = 3     |
    | *         |  5   | j < 1 (5 - 4) |     i = 4     |
    
* Demo

    ```js
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < i + 1; j++) {
            document.write('*')
        }
        document.write('<br />')
    }
    for (var i = 0; i < 5; i++) {
        for (var k = 0; k < 5 - i; k++) {
            document.write('*')
        }
        document.write('<br />')
    }
    ```

### 乘法表

```js
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        //  j 为宽度，i 为高度，因此 j 在前 i 在后
        document.write(j + ' * ' + i + ' = ' + (i * j) + '&nbsp;&nbsp;&nbsp;')
    }
    document.write('<br />')
}
```

## 10、函数立即执行

*   函数定义完以后，会被立即调用，这种函数叫做**立即执行函数**
*   **立即执行函数往往只会执行一次**

```js
//	无参函数
(function () {
    document.write('我是一个匿名函数')
})()

//	有参函数
(function (x, y) {
    document.write('x + y = ' + (x + y))
})(400, 120)
```

## 11、构造函数

* 创建一个构造函数，专门用来创建 `Proson` 对象
    * 构造函数就是一个普通的函数，创建方式和普通函数没有区别
    * 不同的是构造函数习惯上首字母大写
* 构造函数和普通函数的区别就是调用方式不同
    * 普通函数 是直接调用
    * 构造函数需要使用 `new` 关键字来调用
* 构造函数的执行流程
    * 函数被创建后会立即创建一个新的对象
    * 将新建的对象设置为函数中的 `this` ，在构造函数中可以使用 `this` 来引用新建的对象
    * 逐行执行函数中的代码
    * 将新建的对象作为返回值返回
* 使用同一个构造函数创建的对象，被称为一类对象，也将这个构造函数称为一个类
* 通过一个构造函数创建的对象，称为是该类的实例

```js
function Proson () {
    alert(this)
}
let pro = new Proson()
console.log(pro)
```

### instanceof

* 用来检查一个对下个是否是一个类的实例

```js
console.log(pro instanceof Proson)
console.log(pro instanceof Object)
```

### this

* 当以函数的形式调用时，`this` 是 `window`
* 当以方法的形式调用时，谁调用方法 `this` 就是谁
* 当以构造函数的形式调用时，`this` 就是新创建的那个对象

## 12、prototype 原型链

* 创建的每一个函数，解析器都会向函数中添加一个属性 `prototype`

* 每个函数是的 `prototype` 都是唯一的（不同的）

* `prototype` 属性对应的是一个对象，这个对象就是所谓的 **原型对象**

*   函数作为普通函数调用 `prototype` 是没有任何作用的

* 当函数以构造函数的形式调用时，它所创建的对象中都会有一个**隐含的属性**

    * 指向该构造函数的**原型对象**，可以通过   `__proto__` 来访问该属性

    ```js
    function Proson () {}
    var pro = new Proson
    console.log(pro.__proto__)
    console.log(pro.__proto__ == Proson.prototype)
    ```

* **原型对象** 就相当于一个公共的区域，所有同一个类的实例都可以访问到这个 **原型对象**

* **可以将对象中共有的内容，统一设置到*原型对象*中**

* 当访问对象的一个属性或方法时，会先在对象自身中寻找，**如果有则直接使用，如果没有则会去原型对象中寻找**

    ```js
    Proson.prototype.str = 123
    Proson.prototype.testFun = function () {
        alert(this)
    }
    let pro = new Proson()
    let pro2 = new Proson()
    pro.str = 456
    console.log(pro.str)	//	456
    console.log(pro2.str)	//	123
    ```

### in	检查属性是否存在

* 检查对象中是否含有某个属性，如果对象中没有但是原型中有，也会返回 `true`

    ```js
    Proson.prototype.str = 123
    function Proson () {}
    var pro = new Proson
    console.log('str' in pro)	//	true
    ```

### hasOwnProperty()	是否有自己的属性

* 使用 `hasOwnProperty()` 来检查对象自身中是否含有该属性
* 使用该方法只有对象自身中含有属性时，才会返回 `true`

```js
Proson.prototype.str = 123
function Proson () {}
var pro = new Proson
pro.name = 'tom'
pro.hasOwnProperty('name')
console.log(pro.__proto__.__proto__.hasOwnProperty('hasOwnProperty'))
```

