export function add(a, b) {
    return a + b
}

export function arrSum(arr) {
    return arr.reduce((sum, curr) => {
        return sum += curr
    }, 0)
}