package ou.secs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import ou.secs.dao.MySQLAccess;

import java.sql.*;

@Controller
public class AdminController {

    @PostMapping("/test")
    public String test(@RequestParam String firstname) throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
        Connection c = null;
        Statement s;
        PreparedStatement p = null;
        try {
            c = DriverManager.getConnection("jdbc:mysql://localhost:3306?user=root&password=sqluserpw#2018");
            s = c.createStatement();
            s.execute("USE mtng;");
            p = c.prepareStatement("INSERT INTO Person (Person_ID, Person_name, isCreator) VALUE (42, ?, true);");
            p.setString(1, firstname);
            p.execute();
        } catch (SQLException e) {
            throw e;
        } finally {
            try {
                if (p != null)
                    p.close();
                if (c != null)
                    c.close();
            } catch (SQLException e2) {}
        }
        return "welcome";
    }

	@RequestMapping(value = "/createPoll")
	public String createPoll(ModelMap model) {
		String message = "<br><div style='text-align:center;'>"
				+ "<h3>********** Hello World, Spring MVC Tutorial</h3>This message is coming from CrunchifyHelloWorld.java **********</div><br><br>";

		MySQLAccess dbAccessDao = new MySQLAccess();
		try {
			dbAccessDao.readDataBase();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "welcome";
	}

	@RequestMapping(value = "/setTitle")
	public void editPoll(ModelMap model) {

	}

	@RequestMapping(value = "/setEventLocation")
	public void setEventLocation(ModelMap model) {

	}

	@RequestMapping(value = "/setValidTimes")
	public void setValidTimes(ModelMap model) {

	}

	@RequestMapping(value = "/deletePoll")
	public void deletePoll(ModelMap model) {

	}
}
