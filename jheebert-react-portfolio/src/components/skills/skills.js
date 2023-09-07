import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
// Import your skills data
import skillsData from "./db-skills";
import "./skills.css";
const SkillCard = ({ skillCategory }) => (
    <Card className="focus mb-2">
        <Card.Body>
            <Card.Title className="text-center card-title">{skillCategory.title}</Card.Title>
            <hr />
            <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skillCategory.skillsData.map((skill, index) => (
                    <span key={index}>
                        <a
                            className="text-dark text-decoration-none"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" />{" "}
                            {skill.skillName}
                        </a>
                    </span>
                ))}
            </Card.Text>
        </Card.Body>
    </Card>
);
const Skills = () => {
    return (
        <div className="pt-3 pb-3" id="skills">
            <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
            {skillsData.skillsData.map((skillCategory, index) => (
                <SkillCard key={index} skillCategory={skillCategory} />
            ))}
        </div>
    );
};

export default Skills;