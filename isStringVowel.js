// check whether an string contains vowel or not using switch case

{
    let string = prompt('Enter a string:'), count = 0;
    for (let i in string) {
        count += (checkVowel(string[i]));
    }
    console.log(count != 0 ? `'${string}' string does contain ${count} vowel` : `'${string}' string doesn't contain any vowel`);
}

function checkVowel(string) {
    let count = 0;
    switch (string) {
        case 'a':
            count++;
            break;
        case 'e':
            count++;
            break;
        case 'i':
            count++;
            break;
        case 'o':
            count++;
            break;
        case 'u':
            count++;
            break;
        case 'A':
            count++;
            break;
        case 'E':
            count++;
            break;
        case 'I':
            count++;
            break;
        case 'O':
            count++;
            break;
        case 'U':
            count++;
            break;

        default:
            break;
    }
    return count;
}