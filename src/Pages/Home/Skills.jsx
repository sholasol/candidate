import data from "../../data/index.json"
import React from 'react'

function Skills() {
  return (
    <section className="skill-section" id="mySkill">
        <div className="portfolio-container">
            <p className="section-title">My Skills</p>
            <h2 className="skills-header">My Expertise</h2>
        </div>
        <div className="skill-container">
            {data?.skills?.map((item, index) =>(
                <div key={index} className="skill-card">
                    <div className="skill-img">
                        <img src={item.src} alt="product" />
                    </div>
                    <div className="skill-card-content">
                        <h3 className="skill-title">{item.title}</h3>
                        <p className="skill-description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Skills
