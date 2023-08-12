package Atv01;

public class Quest9 {
    public static void main(String[] args) {
        situacaoFinanceira situacao = new situacaoFinanceira(2250.60, 500.10);
        double seuSaldo = situacao.saldo();
        System.out.println("Seu saldo é de: " + seuSaldo);
    }
}

class situacaoFinanceira {
    double valorCreditos;
    double valorDebitos;

    public situacaoFinanceira(double credito, double debito){
        valorCreditos = credito;
        valorDebitos = debito;
    }

    double saldo(){
        return valorCreditos - valorDebitos;
    }
}
