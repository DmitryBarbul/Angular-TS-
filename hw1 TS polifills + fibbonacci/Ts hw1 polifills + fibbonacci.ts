//Task №1 polindrom 

function polindrom(str: string): string {
  if (str == str.split('').reverse().join('')) { 
    return ` yes it is a pollindrom! - ${str}`
  }
  return `no it is not a polindrom! - ${str}`
 };
 
 console.log(polindrom('lol'));
 console.log(polindrom('qwerty'));

 //Task №2 Fibbonacci

 function fib(num: number): Array<number> {
  if (num < 2) return [];
    let arr: Array<number> = [1,1];
    let initialValue: number;
      for (initialValue = arr[arr.length -1]; initialValue <= num; initialValue += arr[arr.length -2]) 
        arr.push(initialValue)
    return arr
}

console.log(fib(0));
console.log(fib(12));



