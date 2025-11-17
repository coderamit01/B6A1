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
    return (`'Name: ${this.name}, Age: ${this.age}'`);
  }
}

type WishList = {title:string, rating: number};
const filterByRating = (values: WishList[]):WishList[] => {
  values.forEach((book) => {
    const rating = book.rating >= 0 && book.rating <= 5;
      if(!rating) {
        throw new Error("Rating should be between 0 and 5");
      }
  });

  return values.filter((book) => (
    book.rating > 4
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

const getUniqueValues = <T extends string | number>(arr1: T[], arr2: T[]): T[] => {
  const uniqueValues: T[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    const currentVal = arr1[i];
    if(currentVal === undefined) continue;
    for (let j = 0; j < uniqueValues.length; j++) {
     if(uniqueValues[j] === currentVal){
      found = true;
      break;
     }
    }   
    if(!found) {
      uniqueValues[uniqueValues.length] = currentVal;
    }
  };

  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    const currentVal = arr2[i];
    if(currentVal === undefined) continue;
    for (let j = 0; j < uniqueValues.length; j++) {
     if(uniqueValues[j] === currentVal){
      found = true;
      break;
     }
    }   
    if(!found) {
      uniqueValues[uniqueValues.length] = currentVal;
    }
  }
  return uniqueValues;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (values: Product[]):number => {

  values.forEach((product) => {
    const discount = product.discount ?? 0;
    if(discount < 0 || discount > 100) {
      throw new Error("Discount should be between 0 and 100");
    }
  });

  if(values.length > 0) {
    return values.reduce((total,product) => {  
      const amount = product.price * product.quantity;
      const discountAmount = product?.discount ? amount * product.discount / 100 : 0;
      const subTotal = amount - discountAmount;
      return total + subTotal;
    },0)
  }else {
    return 0;
  }
};
