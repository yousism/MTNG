package ou.secs.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

import ou.secs.domain.Poll;

public class MySQLAccess {
	public static Connection getConnection() throws Exception {
		String driverName = "org.gjt.mm.mysql.Driver";
		Class.forName(driverName);

		String serverName = "localhost";
		String mydatabase = "mtng";
		String url = "jdbc:mysql://" + serverName + "/" + mydatabase;

		String username = "root";
		String password = "sqluserpw#2018";
		Connection connection = DriverManager.getConnection(url, username, password);

		if (connection.isValid(5)) {
			System.out.println(connection);
		}
		return connection;
	}

	public static void saveToDB(Poll poll) {
		Connection c = null;
		Statement s;
		PreparedStatement p = null;
		try {
			c = getConnection();
			s = c.createStatement();
			s.execute("USE mtng;");
			p = c.prepareStatement("INSERT INTO Poll (Name, Location) VALUE (?, ?);");
			p.setString(1, poll.getName());
			p.setString(2, poll.getLocation());
			p.execute();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			try {
				if (p != null)
					p.close();
				if (c != null)
					c.close();
			} catch (SQLException e2) {
			}
		}

	}
}