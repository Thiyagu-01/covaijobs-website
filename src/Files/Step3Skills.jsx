
import { useState } from "react";
import "../FileStyle/Step3Skills.css";

const ALL_SKILLS = [
 
  "C",
  "C++",
  "C#",
  "Go",
  "Rust",
  "Python",
  "Java",
  "Kotlin",
  "Swift",
  "Objective-C",
  "Scala",
  "Ruby",
  "R",
  "PHP",
  "Perl",
  "Dart",
  "Groovy",
  "Shell Scripting",
  "Bash",
  "PowerShell",
  "HTML",
  "CSS",
  "Sass",
  "Less",
  "JavaScript",
  "TypeScript",
  "WebAssembly",
  "React",
  "Next.js",
  "Angular",
  "Vue.js",
  "Nuxt.js",
  "Svelte",
  "SolidJS",
  "Redux",
  "Zustand",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Node.js",
  "Express.js",
  "NestJS",
  "Django",
  "Flask",
  "FastAPI",
  "Spring",
  "Spring Boot",
  "Hibernate",
  "ASP.NET",
  ".NET Core",
  "Ruby on Rails",
  "Laravel",
  "Symfony",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Cassandra",
  "DynamoDB",
  "Firebase",
  "SQLite",
  "Oracle DB",
  "SQL Server",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud",
  "Terraform",
  "Ansible",
  "Jenkins",
  "GitHub Actions",
  "GitLab CI",
  "RabbitMQ",
  "Apache Kafka",
  "ActiveMQ",
  "NATS",
  "REST API",
  "GraphQL",
  "gRPC",
  "SOAP",
  "WebSockets",
  "Android",
  "iOS",
  "React Native",
  "Flutter",
  "Ionic",
  "Jest",
  "Mocha",
  "Chai",
  "Cypress",
  "Playwright",
  "Selenium",
  "JUnit",
  "OAuth",
  "JWT",
  "RBAC",
  "SAML",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Apache Spark",
  "RAG",
  "Git",
  "GitHub",
  "GitLab",
  "Bitbucket",
  "Linux",
  "Unix",
  "WordPress",
  "Drupal",
  "Magento",
  "Shopify",
  "Microservices",
  "Serverless",
  "CI/CD",
  "Agile",
  "Scrum"
];



function Step3Skills({ nextStep, prevStep }) {
  const [skills, setSkills] = useState([
    { name: "", years: "", months: "" },
  ]);

  const [softSkills, setSoftSkills] = useState("");

  const updateSkill = (index, field, value) => {
    const copy = [...skills];
    copy[index][field] = value;
    setSkills(copy);
  };

  const addSkill = () => {
    setSkills([...skills, { name: "", years: "", months: "" }]);
  };

  const removeSkill = (index) => {
    if (skills.length === 1) return;
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="skills-page">
      <h2 className="page-title">Skills</h2>

       <p className="desc">
         Add your programming languages and frameworks           </p>
          <p className="sub-para">
         These will help us match you with relevant work, more skills are better
       </p>

{skills.map((skill, index) => (
  <div className="skill-row" key={index}>
    <input
      list="skills-list"
      placeholder="Skill name"
      value={skill.name}
      onChange={(e) => updateSkill(index, "name", e.target.value)}
    />
    <input
      type="number"
      placeholder="Years"
      value={skill.years}
      onChange={(e) => updateSkill(index, "years", e.target.value)}
    />
    <input
      type="number"
      placeholder="Months"
      value={skill.months}
      onChange={(e) => updateSkill(index, "months", e.target.value)}
    />

    <div className="row-actions">
      <button
        className="remove-btn"
        onClick={() => removeSkill(index)}
        disabled={skills.length === 1}
      >
        –
      </button>

      <button
        className="add-btn"
        onClick={addSkill}
        style={{ visibility: index === skills.length - 1 ? "visible" : "hidden" }}
      >
        +
      </button>
    </div>
  </div>
))}

      <datalist id="skills-list">
        {ALL_SKILLS.map((s) => (
          <option key={s} value={s} />
        ))}
      </datalist>

      {/* Soft Skills */}
      <div className="soft-skills">
        <h4>Add your soft skills</h4>
        <textarea
          placeholder="Enter your soft skills"
          value={softSkills}
          onChange={(e) => setSoftSkills(e.target.value)}
        />
      </div>

      {/* Footer Buttons */}
      <div className="ftr-buttons">
        <button className="back-btn" onClick={prevStep}>
          Back
        </button>
        <button className="next-btn" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Step3Skills;
