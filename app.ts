//// TYPESCRIPT AUTOMATICALLY ASSIGNS A TYPE WHEN YOU DEFINE A VARIABLE
let variable = 'hello';

variable = 'hi';

let age = 18;

// age="eighteen"

//// EXPLICITLY PROVIDING A TYPE
let ageWithType: number = 22;

// ageWithType ="eighteen"
ageWithType = 18;

//// BASIC TYPES
let testString: string;

testString = 'hello';

let testBoolean: boolean;

testBoolean = false;

//// MULTIPLE TYPES (UNION TYPES)
let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = '10';
// testStringOrNumber = []

//// ARRAYS
let names = ['john', 'jane', 'tom'];

// names.push(3)
names.push('mike');

let numbers = [11, 22, 35];

// numbers.push(true)
numbers.push(92);

let testStringArray: string[];

// testStringArray = [1,2,3]
testStringArray = ['one', 'two', 'three'];

let testNumberArray: number[];

// testNumberArray = [true, "hi", 23]
testNumberArray = [12, 55, 23];

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = [1, 'two', 3];

//// OBJECTS
let user = {
  username: 'john',
  age: 22,
  isAdmin: false,
};

user.username = 'jane';
// user.age = "eighteen"
user.age = 29;
// user.isAdmin = "no"
user.isAdmin = true;

// user.phone = "+12345678"

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: 'john',
  age: 23,
  isAdmin: true,
  // phone:"+1234567"
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: 'jane',
  age: 43,
  isAdmin: false,
  phone: '+1234567',
};

//ANY
let testAny;
testAny = 34;
testAny = 'ace';
testAny = 'hahah';

let testAnyArray: any[];
testAnyArray = [1, true, []];

// functions
let sayHi = () => {
  console.log('Hi');
};
// sayHi = 'hi';
let funcReturnString = (): string => {
  console.log('hahah');
  return 'aleks';
};

let multiple = (num: number) => {
  return num * 2;
};

let multiple2 = (num: number): number => {
  return num * 2;
};

let multiple3 = (num: number): void => {
  // return num * 2;
  //do something but not return
  console.log('ace');
};

let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

let func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

// TYPE ALIASES
type UserType = {
  username: string;
  age: number;
  phone?: number;
};

let betterfunc = (user: UserType) => {
  console.log(user.username);
};

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + 'times ' + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: 'dark' | 'light';
};

const userWithTheme: UserType2 = {
  username: 'martina',
  age: 23,
  theme: 'dark',
};

// INTERFACES
interface IUser {
  username: string;
  email: string;
  age: number;
}
interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: 'tom',
  email: 'tom@tom.mk',
  age: 23,
  employeeId: 24245512356,
};

const client: IUser = {
  username: 'tomce',
  email: 'toce@tomce.mk',
  age: 214124,
};

// GENERICS
interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface Ipost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

interface IPostBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe1: IPostBetter<Number> = {
  id: 324,
  title: 'ace',
  desc: 'desc',
  extra: [2, 3, 4],
};

const testMe2: IPostBetter<ICategory> = {
  id: 324,
  title: 'ace',
  desc: 'desc',
  extra: [
    { id: 22, title: 'pinte' },
    { id: 23, title: 'mitre' },
  ],
};
