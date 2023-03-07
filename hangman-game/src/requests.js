async function getPuzzle(wordCount) {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle
    } else {
        throw new Error('Enable to get puzzle')
    }
}

export { getPuzzle as default }