import Controller from './base.controller';
// import ProjectModel from '../models/project.model';

class ProjectController extends Controller {
  public path = 'projects';

  constructor() {
    super();
    this.initRoutes();
  }

  protected initRoutes() {
    // Verify the users authentication status
    this.verifyAuthentication();

    this.router.route('/');
  }
}

export default ProjectController;
