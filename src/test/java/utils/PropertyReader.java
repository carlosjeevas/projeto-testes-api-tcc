package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.Set;

public class PropertyReader {
    static Properties prop = new Properties();
    static InputStream input = null;
    private static String pathUrls = "src//test//java//config//config.properties";

    private static void loadProperties() {
        try {
            input = new FileInputStream( pathUrls );
            prop.load( input );
            prop.keys();
        } catch( IOException e ) {
            e.printStackTrace();
        }
    }

    public static Set<String> getPropertyKeys(){
        if( prop.size() <= 0 )
            loadProperties();
        return prop.stringPropertyNames();
    }

    public static String getProperty( String key ) {
        return getProperty( key, null );
    }

    public static String getProperty( String key, String defaultValue ) {
        String value = System.getProperty( key );
        if( value != null ) {
            return value;
        }
        if( prop.size() <= 0 )
            loadProperties();
        if( !prop.containsKey( key ) && defaultValue == null ) {
            throw new RuntimeException( "Não existe a key [ " + key + " ] no arquivo properties: " + pathUrls );
        }
        return prop.getProperty( key, defaultValue );
    }
}
