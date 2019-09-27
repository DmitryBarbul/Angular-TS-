//Task №1 polindrom 

function polindrom(str: string) {
  if (str == str.split('').reverse().join('')) {
    return ` yes it is a pollindrom! - ${str}`
  } else {
    return  `it's not a pollindrom!`
  }
 };
 
 console.log(polindrom('lol'));
 console.log(polindrom('qwerty'));

 //Task №2 Fibbonacci

 function fib(num: number) {
  if (num > 0) {
    let arr: Array<number> = []
    let a: number = 1;
    let b: number = 1;
      for (let i: number = 0; i <= num; i++) {
        let c: number = a + b;
        a = b;
        b = c;
        arr.push(b)
    }
    return arr
  } else {
    return `set parameter that will be a number that not eaqual 0 and more than 0 `
  }
}
console.log(fib('Alabama'));
console.log(fib(0));
console.log(fib(12));
