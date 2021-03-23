const add3 = x => x + 3;

const nul100 = x => x * 100;

const nul8 = x => x * 8;

const mai5 = x => x - 5;


const n = 3;

console.log(mai5(nul100(n)));

function abc(f, k, n) {
    return f(k(f(n)))
}

const result = abc(add3, nul8, n)
console.log(result);

////////////////////////////////////

const items = [
    // 日  月  火  水  木  金  土
    [14, 93, 89, 51, 85, 59, 33],
    [69, 27, 40, 76, 25, 21, 55],
    [55, 60, 3, 28, 49, 5, 91],
    [19, 56, 92, 66, 53, 80, 13],
]

const sums = items.map((item) => {
    let sum = 0;
    for (let i = 0, len = item.length; i < len; i++) {
        sum += item[i]
    }
    return sum;
})

console.log(sums) //=> [424, 313, 291, 379]





