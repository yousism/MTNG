package ou.secs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class VoterController {

	@RequestMapping(value = "/setVote")
	public void setVote(ModelMap model) {

	}

	@RequestMapping(value = "/editVote")
	public void editVote(ModelMap model) {

	}

}
