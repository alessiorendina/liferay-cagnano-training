public class ConvertFactory {
    public static MultiLang getLang(String lang) {

        MultiLang multiLang = null;

        if (lang == "Italian") {
            multiLang = new ConvItalian();
        }
        if (lang == "English") {
            multiLang = new ConvEng();
        }
        return multiLang;
    }
}
