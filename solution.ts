const formatValue = (value: string | number | boolean): string | number | boolean => {
  if(typeof value === 'string'){
    return value.toUpperCase();
  }else if(typeof value === 'number') {
    return value * 10;
  } else {
    return value === true ? false : true;
  }
};

const getLength = <T>(value: string | T[]): number => {
  if(typeof value === 'string') {
    return value.length;
  } else {
    return value.length;
  }
}

class Person {
  name: string;
  age: number;
  constructor(name:string,age:number) {
    this.name = name;
    this.age = age;
  }
  getDetails():string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type WishList = {title:string, rating: number};
const filterByRating = (values: WishList[]):WishList[] => {
  return values.filter((item) => (
    item.rating > 4
  ));
}


interface Users {
  id: number,
  name: string,
  email: string,
  isActive: boolean
}
const filterActiveUsers = (values: Users[]):Users[] => {
  return values.filter((item) => (
    item.isActive === true
  ));
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (values: Book): string => {
  return `Title: ${values.title}, Author: ${values.author}, Published: ${values.publishedYear}, Available: ${values.isAvailable === true ? 'Yes' : 'No'}`
}

type ArrayType = string[] | number[];
const getUniqueValues = (arr1: ArrayType, arr2: ArrayType): ArrayType => {

}


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (values: Product[]):number => {
  if(values.length > 0) {
    return values.reduce((total,item) => {  
      const amount = item.price * item.quantity;
      const discountAmount = item?.discount ? amount * item.discount / 100 : 0;
      const subTotal = amount - discountAmount;
      total += subTotal;
      return total;
    },0)
  }else {
    return 0;
  }
};