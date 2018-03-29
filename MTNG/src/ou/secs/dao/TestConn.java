package ou.secs.dao;

import java.sql.Connection;
import java.sql.DriverManager;

public class TestConn {
    public static void main(String[] argv) throws Exception {
        String driverName = "org.gjt.mm.mysql.Driver";
        Class.forName(driverName);

        String serverName = "localhost";
        String mydatabase = "mtng";
        String url = "jdbc:mysql://" + serverName + "/" + mydatabase;

        String username = "root";
        String password = "";
        Connection connection = DriverManager.getConnection(url, username, password);


        if (connection.isValid(5)){
            System.out.println(connection);
        }
    }
}
