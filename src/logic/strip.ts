// TODO: Ignore leading words like "the" and "a"

const strip = (text: string): string => {
    let stripped = text.toLowerCase() // Always lowercase
    stripped = stripped.replace(/\s/gi, '') // remove all whitespace
    stripped = stripped.replace(/[^a-zA-Z0-9]/gi, '') // remove any non-alphanumeric characters

    return stripped
}

export default strip
