import java.util.Scanner;

public class ConvItalian implements MultiLang {

    @Override
    public String italian() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Premi q per uscire");

        while (true) {
            try {
                System.out.println("Inserisci un numero");
                System.out.println(convertNumberToWords(scanner.nextLong()));
            } catch (Exception wrongValue) {
                System.out.println("Inserisci un numero valido");
            }
            String exit = scanner.nextLine();
            if (exit.equals("q")) {
                break;
            }
        }
        return "Ciao";
    }


    protected static String oneDigits[] = {"zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci",
            "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciasette", "diciotto", "diciannove"};

    protected static String twoDigits[] = {"", "dieci", "venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta",
            "novanta"};

    protected static String dopoDecine[] = {"cento", "mila", "mille", "unmilione", "milioni", "miliardi", "unmiliardo"};


    private static String convertNumberToWords(long number) {
        String words = "";

        if (number < 0 || number > 999999999999L) {
            return "Numero invalido";
        } else if (number == 0) {
            return "zero";
        }

        if (number >= 1_000_000_000) {
            if (number / 1_000_000_000 == 1) {
                words += dopoDecine[6];
            } else {
                words += convertNumberToWords(number / 1000000000) + dopoDecine[5];
            }
            number %= 1000000000;
        }

        if (number >= 1_000_000) {
            if (number / 1_000_000 == 1) {
                words += dopoDecine[3];
            } else {
                words += convertNumberToWords(number / 1000000) + dopoDecine[4];
            }
            number %= 1000000;
        }

        if (number >= 10000) {
            words += convertNumberToWords(number / 1000) + dopoDecine[1];
            number %= 1000;
        }

        if (number >= 1000 && number <= 9999) {
            if (number / 1000 == 1) {
                words += dopoDecine[2];
            } else {
                words += convertNumberToWords(number / 1000) + dopoDecine[1];
            }
            number %= 1000;
        }

        if (number >= 100 && number <= 999) {
            if (number / 100 == 1) {
                words += dopoDecine[0];
                number %= 100;
            } else {
                words += convertNumberToWords(number / 100) + dopoDecine[0];
                number %= 100;
            }
        }

        if (number > 0 && number < 20) {
            words += oneDigits[(int) number];
        }
        if (number > 19 && number <= 99) {
            if (number % 10 == 1 || number % 10 == 8) {
                words += removeLastChar(twoDigits[(int) (number / 10)]);
            } else {
                words += twoDigits[(int) (number / 10)];
            }
            if ((number % 10) > 0) {
                words += oneDigits[(int) (number % 10)];
            }

        }
        return words;
    }

    public static String removeLastChar(String s) {
        return (s == null || s.length() == 0)
                ? null
                : (s.substring(0, s.length() - 1));
    }

    @Override
    public String english() {
        return null;
    }

}


