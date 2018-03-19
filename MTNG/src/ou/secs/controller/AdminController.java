package ou.secs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdminController {

	@RequestMapping(value = "/createPoll")
	public String createPoll(ModelMap model) {
		String message = "<br><div style='text-align:center;'>"
				+ "<h3>********** Hello World, Spring MVC Tutorial</h3>This message is coming from CrunchifyHelloWorld.java **********</div><br><br>";
		return "weclome";
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
