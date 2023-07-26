import java.util.Scanner;

public class Main {
    public static void main(String args[]) {

        boolean loop = true;
        Scanner scanner = new Scanner(System.in);
        long number;
        System.out.println("Press q to exit");

        while (loop) {
            try {
                System.out.println("Please Enter a number");
                number = scanner.nextLong();
                System.out.println(convertNumberToWords(number));
            } catch (Exception wrongValue) {
                System.out.println("Please enter a valid number");
            }
            String exit = scanner.nextLine();
            if (exit.equals("q")) {
                break;
            }
        }
    }

    private static String convertNumberToWords(long number) {

        String words = "";

        String oneDigits[] = {"zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci",
                "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciasette", "diciotto", "diciannove"};

        String twoDigits[] = {"", "dieci", "venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta",
                "novanta"};

        String twoDigits2[] = {"", "diec", "vent", "trent", "quarant", "cinquant", "sessant", "settant", "ottant",
                "novant"};

        if (number < 0) {
            return "Invalid Number";
        }

        if (number == 0) {
            return "zero";
        }

        if (number >= 1_000_000_000) {
            if (number / 1_000_000_000 == 1) {
                words += "unmiliardo";
                number %= 1000000000;
            } else {
                words += convertNumberToWords(number / 1000000000) + "miliardi";
                number %= 1000000000;
            }
        }

        if (number >= 1_000_000) {
            if (number / 1_000_000 == 1) {
                words += "unmilione";
                number %= 1000000;
            } else {
                words += convertNumberToWords(number / 1000000) + "milioni";
                number %= 1000000;
            }
        }

        if (number >= 10000) {
            words += convertNumberToWords(number / 1000) + "mila";
            number %= 1000;
        }

        if (number >= 1000 && number <= 9999) {
            if (number / 1000 == 1) {
                words += "mille";
                number %= 1000;
            } else {
                words += convertNumberToWords(number / 1000) + "mila";
                number %= 1000;
            }
        }

        if (number >= 100 && number <= 999) {
            if (number / 100 == 1) {
                words += "cento";
                number %= 100;
            } else {
                words += convertNumberToWords(number / 100) + "cento";
                number %= 100;
            }
        }

            if (number > 0 && number < 20) {
                words += oneDigits[(int) number];
            }
            if (number > 19 && number <= 99) {
                if (number % 10 == 1 || number % 10 == 8) {
                    words += twoDigits2[(int) (number / 10)];
                } else {
                    words += twoDigits[(int) (number / 10)];
                }
                if ((number % 10) > 0) {
                    words += oneDigits[(int) (number % 10)];
                }
            }
        return words;
    }
}


