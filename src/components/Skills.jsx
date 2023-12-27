import React from "react";

const Skills = () => {
  const allSkillsData = [
    {
      title: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Express JS",
        "MySQL",
        "MongoDB",
        "GitHub",
        "Azure",
      ],
    },

    {
      title: "Generative AI",
      skills: [
        "GPT",
        "Gemini",
        "DALL·E",
        "Hugging Face",
        "Langchain",
        "Semantic Kernel",
        "AstraDB",
        "CosmosDB",
        "Prompt Engineering",
        "Chat Bots",
      ],
    },
    {
      title: "Blockchain",
      skills: [
        "Solidity",
        "Ether.js",
        "IPFS",
        "Rainbow Kit",
        "WAGMI",
        "Fleek",
        "Remix",
        "Spheron Network",
      ],
    },
    {
      title: "Others",
      skills: [
        "JAVA",
        "Typescript",
        "Bootstrap",
        "Tailwind CSS",
        "RestAPI",
        "Postman",
        "UI/UX",
        "Microsoft Office",
      ],
    },
  ];

  return (
    <section id="skills">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Technical Skills</h1>

      <div className="container">
        <div className="row justify-content-center d-flex">
          {allSkillsData.map((category, index) => (
            <div key={index} className="col-lg-6">
              <div className="details-container">
                <h2 className="skills-sub-title">{category.title}</h2>
                <div className="article-container">
                  {category.skills.map((skill, idx) => (
                    <article key={idx}>
                      <div>
                        <h6 className="underline-on-hover">{skill}</h6>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
