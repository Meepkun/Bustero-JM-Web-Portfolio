import picture1 from "../assets/img/Picture1.jpg";
import picture2 from "../assets/img/Gym_Log.png";
import picture3 from "../assets/img/My_draw.jpg";
import picture4 from "../assets/img/Meep.jpg";


function ProjectSection() {
    return (
    <>

    <h1 id="projects" class="text-center display-6 fw-bold text-body-emphasis lh-1 mb-3">My Projects</h1>

        <div class="full-screen-height album py-5">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-6">
        <div class="col my-2">
          <div class="card border-outline shadow-sm">
          <img src={picture1} class="bd-placeholder-img project-img card-img-top" />
            <div class="card-body">
            <h2>Hotel Reservation System</h2>
              <p class="card-text">A hotel reservation system developed using CSS and MYSQL. A collaborative work and I'm one of the front-end developers. </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href="https://github.com/gerlyntan07/F5_HotelReservationSystem" target="_blank">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Code</button>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col my-2">
          <div class="card border-outline shadow-sm">
          <img src={picture2} class="bd-placeholder-img project-img card-img-top"/>
            <div class="card-body">
            <h2>Gym Log Application</h2>
              <p class="card-text">A gym log application built using Tkinter and SQLite Database. A collaborative work and I'm the main front-end developer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href="https://github.com/Meepkun/GymLogApp/tree/main/Gym_Logs-main" target="_blank">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Code</button>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col my-2">
          <div class="card border-outline shadow-sm">
          <img src={picture3} class="bd-placeholder-img project-img card-img-top"/>
            <div class="card-body">
            <h2>Anime Pencil Drawing</h2>
              <p class="card-text">Drawing anime characters as a hobby.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href={picture3} target="_blank">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col my-2">
          <div class="card border-outline shadow-sm">
          <img src={picture4} class="bd-placeholder-img project-img card-img-top"/>
            <div class="card-body">
            <h2>Portrait of myself</h2>
              <p class="card-text">I draw myself for the activity.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href={picture4} target="_blank">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
    );
}

export default ProjectSection;