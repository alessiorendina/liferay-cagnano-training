import java.util.Scanner;

public class ConvEng implements MultiLang {

    @Override
    public void run() {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Press q to exit");

        String exit = null;

        try {
            System.out.println("Please Enter a number");
            System.out.println(convertNumberToWords(scanner.nextLong()));
        } catch (Exception wrongValue) {
            exit = scanner.nextLine();

            if (!exit.equals("q")) {   
                System.out.println("Please enter a valid number");
            }
        }

        if (exit == null) {
            exit = scanner.nextLine();
        }

        if (!exit.equals("q")) {            
            run();
        }

        return;
    }


    protected static String oneDigits[] = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
            "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"};

    protected static String[] twoDigits = {"", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty",
            "ninety"};
    protected static String[] dopoDecine = {"hundred", "thousand", "million", "billion"};

    private static String convertNumberToWords(long number) {

        String words = "";


        if (number < 0 || number > 999999999999L) {
            return "Invalid Number";
        }

        if (number == 0) {
            return oneDigits[0];
        }

        if (number >= 1_000_000_000) {
            words += convertNumberToWords(number / 1000000000) + dopoDecine[3];
            number %= 1000000000;
        }

        if (number >= 1_000_000) {
            words += convertNumberToWords(number / 1000000) + dopoDecine[2];
            number %= 1000000;
        }

        if (number >= 1000 && number <= 999999) {
            words += convertNumberToWords(number / 1000) + dopoDecine[1];
            number %= 1000;
        }

        if (number >= 100 && number <= 999) {
            words += convertNumberToWords(number / 100) + dopoDecine[0];
            number %= 100;
        }

        if (number > 0 && number < 20) {
            words += oneDigits[(int) number];
        }
        if (number > 19 && number <= 99) {
            words += twoDigits[(int) (number / 10)];

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
}

