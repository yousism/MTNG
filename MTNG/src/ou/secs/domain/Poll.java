package ou.secs.domain;

import java.io.Serializable;

public class Poll implements Serializable {

	private String name;
	private String location;
	private Integer pollID;
	private Integer personID;
//	private List<TimeOptions> pollTimeList;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Integer getPollID() {
		return pollID;
	}

	public void setPollID(Integer pollID) {
		this.pollID = pollID;
	}

	public Integer getPersonID() {
		return personID;
	}

	public void setPersonID(Integer personID) {
		this.personID = personID;
	}

}
