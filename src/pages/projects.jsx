import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/portfolio")
      .then(res => setProjects(res.data))
      .catch(err => console.error("Gagal fetch data:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Portofolio Proyek</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6 mt-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
