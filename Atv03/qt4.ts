function formatArray(numbers: number[]): string {
    let formattedString = "";
    numbers.forEach((number, index) => {
        if (index !== 0) {
            formattedString += "-";
        }
        formattedString += number.toString();
    });
    return formattedString;
}
