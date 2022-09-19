const reverseString = require("./reverse-a-string")

test('PASSED: reverseString("hello") should return "olleh', () => {
    expect(reverseString("hello")).toBe("olleh")
})

test('PASSED: reverseString("abcde") should return "edcba', () => {
    expect(reverseString("abcde")).toBe("edcba")
})

test('PASSED: reverseString("pseudocode") should return "edocoduesp', () => {
    expect(reverseString("pseudocode")).toBe("edocoduesp")
})

test('PASSED: reverseString("hello world!") should return "!dlrow olleh', () => {
    expect(reverseString("hello world!")).toBe("!dlrow olleh")
})