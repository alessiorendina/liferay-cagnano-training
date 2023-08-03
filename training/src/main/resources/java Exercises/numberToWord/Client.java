import java.util.Scanner;

public class Client {

    public static void main(String[] args) {

        MultiLang ConvEng = ConvertFactory.getLang("English");
        MultiLang ConvItalian = ConvertFactory.getLang("Italian");
        Scanner scanner = new Scanner(System.in);
        System.out.println(
                "Choose a language between English and Italian");

        while (true)
            switch (scanner.nextLine()) {
                case "Italian":
                    System.out.println(ConvItalian.italian());
                    break;
                case "English":
                    System.out.println(ConvEng.english());
                default:
                    System.out.println(
                            "Choose a language between English and Italian");
                    scanner.hasNextLine();
        }
    }
}
