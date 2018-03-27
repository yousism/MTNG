package ou.secs.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ou.secs.dao.MySQLAccess;
import ou.secs.domain.Poll;

@Controller
public class AdminController {

	@RequestMapping(value = "/createPoll", method = RequestMethod.POST)
	public @ResponseBody String createPoll(@RequestBody Poll poll, HttpServletRequest request,
			HttpServletResponse response) {
		try {
			// String message = IOUtils.toString( request.getInputStream());
			System.out.println("");
			// response.getWriter().write("OK");
		} catch (Exception e1) {

		}
		MySQLAccess dbAccessDao = new MySQLAccess();
		try {
			dbAccessDao.readDataBase();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "Successfully saved poll";
	}

	@RequestMapping(value = "/goToPoll")
	public String goToPoll(ModelMap model) {
		return "welcome";
	}
	/*
	 * @RequestMapping(value = "/setTitle") public void editPoll(ModelMap model) {
	 * 
	 * }
	 * 
	 * @RequestMapping(value = "/setEventLocation") public void
	 * setEventLocation(ModelMap model) {
	 * 
	 * }
	 * 
	 * @RequestMapping(value = "/setValidTimes") public void setValidTimes(ModelMap
	 * model) {
	 * 
	 * }
	 * 
	 * @RequestMapping(value = "/deletePoll") public void deletePoll(ModelMap model)
	 * {
	 * 
	 * }
	 */
}
