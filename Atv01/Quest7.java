package Atv01;

public class Quest7 {
    public static void main(String[] args){
        Retangulo ret = new Retangulo(5, 7);
        double area = ret.calcularArea();
        double perimetro = ret.calcularPerimetro();
        System.out.println("A área do retângulo é: " + area);
        System.out.println("O perímetro do retângulo é: " + perimetro);
    }
}

class Retangulo {
    double lado1;
    double lado2;

    public Retangulo(double l1, double l2){
        lado1 = l1;
        lado2 = l2;
    }

    public double calcularArea(){
        return lado1 * lado2;
    }

    public double calcularPerimetro(){
        return 2 * (lado1 + lado2);
    }

}