import java.util.Scanner;

public class Client {

    public static void main(String[] args) {

        MultiLang ConvEng = ConvertFactory.getLang("English");
        MultiLang ConvItalian = ConvertFactory.getLang("Italian");
        Scanner scanner = new Scanner(System.in);
        System.out.println(
                "Choose a language between English and Italian");

        while (true) {
            String nextLine = scanner.nextLine();

            if (nextLine.equals("Italian")) {
                ConvItalian.run();
            }
            else if (nextLine.equals("English")) {
                ConvEng.run();
            }

            System.out.println("Choose a language between English and Italian");
        }
    }
}
