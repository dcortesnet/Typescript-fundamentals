import { MathOperations } from "./math.interface";

class Mathematics implements MathOperations {
  
  sum(number1: number, number2: number): number {
    return number1 + number2;
  }
  sub(number1: number, number2: number): number {
    return number1 - number2;
  }
  mul(number1: number, number2: number): number {
    return number1 * number2;
  }
  div(number1: number, number2: number): number {
    return number1 / number2;
  }
}

export { Mathematics };