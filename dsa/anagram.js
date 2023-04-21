let first = "hello";
let second = "hlleo";

const isAnagram = (first, second) => {
    if (first.length !== second.length) return false;
    else {
        for (let element of first) {
            if (!second.includes(element)) return false;
        }
        return true;
    }
}

console.log(isAnagram(first, second) ? "Anagram" : "Not Anagram");
