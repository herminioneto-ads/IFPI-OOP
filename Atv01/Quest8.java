package Atv01;

public class Quest8 {
    public static void main(String[] args){
        Circulo circ = new Circulo(5);
        double area = circ.calcularArea();
        double perimetro = circ.calcularPerimetro();

        System.out.println("A área do círculo é de: " + String.format("%.2f", area));
        System.out.println("O perímetro do círculo é de: " + String.format("%.2f", perimetro));
    }
}

class Circulo {
    double raio;
    double pi = 3.14;

    public Circulo(double raio){
        this.raio = raio;
    }

    double calcularArea(){
        return pi * Math.pow(raio, 2);
    }

    double calcularPerimetro(){
        return 2 * pi * raio;
    }
}