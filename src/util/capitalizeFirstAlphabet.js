export function capitalizeFirstAlphabet(sentence) {
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (/^[a-zA-Z]/.test(words[i])) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(" ");
}
