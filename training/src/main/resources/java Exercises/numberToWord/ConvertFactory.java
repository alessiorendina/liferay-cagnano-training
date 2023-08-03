public class ConvertFactory {
    public static MultiLang getLang(String lang) {

        MultiLang multiLang = null;

        if (lang.equals("Italian")) {
            multiLang = new ConvItalian();
        }
        if (lang.equals("English")) {
            multiLang = new ConvEng();
        }
        return multiLang;
    }
}
