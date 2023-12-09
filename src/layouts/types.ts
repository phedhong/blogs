type StringMap = { [key: String]: unknown };

type DynamicObject = { [key: string as `dynamic_${string}`]: string };

let obj: DynamicObject = { dynamic_key: "value" };

console.log(obj);

type Color = "red" | "green" | "blue"; 
type HexColor<T extends Color> = `#${ string } `;

// Usage
let myColor: HexColor<"blue"> = "#0000FF";