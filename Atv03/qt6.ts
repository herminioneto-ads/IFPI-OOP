function exibir(...params: string[]): void {
    params.forEach(param => {
        console.log(param);
    });
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
