function ehPrimo(num: number): boolean {
    if (num <= 1) {
        return false;
    }
  
    // Verifica se o número é divisível por algum número menor que ele
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
  
    return true;
}
