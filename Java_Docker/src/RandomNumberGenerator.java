import java.util.Random;

public class RandomNumberGenerator {
    public static void main(String[] args) {
        Random random = new Random();
        int randomNumber = random.nextInt(10000) + 1;
        System.out.println("Número aleatorio del 1 al 01000: " + randomNumber);
    }
}
