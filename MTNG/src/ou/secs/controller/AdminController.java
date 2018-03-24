package ou.secs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import ou.secs.dao.MySQLAccess;

@Controller
public class AdminController {

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
