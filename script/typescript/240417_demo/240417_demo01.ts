// 类型别名的语法
type Point1 = { x: number, y: number }
// 声明类型的另一种写法
interface Point2 { x: number, y: number }
// ---------------------------


function TsDemo01(data: Point1) {
    console.log("asd")
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}

TsDemo({ x: 3, y: 4 });