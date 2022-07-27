// check whether an word contains vowel or not using switch case

{
    let word = prompt('Enter a word:'), count = 0;
    for (let i = 0; i < word.length; i++) {
        count += (checkVowel(word[i]));
    }
    console.log(count != 0 ? `${word} does contain ${count} vowel` : `${word} doesn't contain any vowel`);
}

function checkVowel(word) {
    let i = 0;
    switch (word) {
        case 'a':
            i++;
            break;
        case 'e':
            i++;
            break;
        case 'i':
            i++;
            break;
        case 'o':
            i++;
            break;
        case 'u':
            i++;
            break;

        default:
            break;
    }
    return i;
}