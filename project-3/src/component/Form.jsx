import React, { useState } from "react";

function Form() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    skill: [""],
    hobby: [""],
  });

  const handleAddSkill = () => {
    setState({ ...state, skill: [...state.skill, ""] });
  };

  const handleAddHobby = () => {
    setState({ ...state, hobby: [...state.hobby, ""] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = [...state.skill];
    updatedSkills.splice(index, 1); 
    setState({ ...state, skill: updatedSkills });
  };

  const handleDeleteHobby = (index) => {
    const updatedHobbies = [...state.hobby];
    updatedHobbies.splice(index, 1); 
    setState({ ...state, hobby: updatedHobbies });
  };

  const handleSkillChange = (e, index) => {
    const updatedSkills = [...state.skill];
    updatedSkills[index] = e.target.value;
    setState({ ...state, skill: updatedSkills });
  };

  const handleHobbyChange = (e, index) => {
    // const updatedHobbies = [...state.hobby];
    Hobbies[index] = e.target.value;
    setState({ ...state, hobby: Hobbies });
  };

  console.log(state);

  return (
    <>
      <form>
        <input type="text" placeholder="First Name" name="fname" onChange={handleChange}/>
        <input type="text" placeholder="Last Name" name="lname" onChange={handleChange} />
        <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
        <input type="button" value="Add Skill" onClick={handleAddSkill} />
        <input type="button" value="Add Hobby" onClick={handleAddHobby} />

        <div>
          <h3>Skills</h3>
          {state.skill.map((skill, index) => (
            <div key={`skill-${index}`}>
              <input type="text" placeholder="Skill" value={skill} onChange={(e) => handleSkillChange(e, index)}/>
              {state.skill.length > 1 && (<input type="button" value="Delete" onClick={() => handleDeleteSkill(index)}/>)}
            </div>
          ))}
        </div>

        <div>
          <h3>Hobbies</h3>
          {state.hobby.map((hobby, index) => (
            <div key={`hobby-${index}`}>
              <input type="text" placeholder="Hobby" value={hobby} onChange={(e) => handleHobbyChange(e, index)}/>
              {state.hobby.length > 1 && (<input type="button" value="Delete" onClick={() => handleDeleteHobby(index)}/>)}
            </div>
          ))}
        </div>
      </form>
    </>
  );
}

export default Form;

