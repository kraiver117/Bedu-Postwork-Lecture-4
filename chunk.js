function chunk(array, size) {
    let arrayChunk = [];

    for (let i = 0; i < array.length; i += size) {
        arrayChunk.push(array.slice(i, size + i));
    }

    return arrayChunk;
}

let data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
