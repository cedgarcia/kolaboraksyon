import Controller from './base.controller';
import Project from '../models/project.model';

class ProjectController extends Controller {
  public path = 'projects';

  constructor() {
    super();
    this.initRoutes();
  }

  protected initRoutes() {
    // Verify the users authentication status
    this.verifyAuthentication();

    this.router
      .route('/')
      .get(this.getAll(Project))
      .post(this.createOne(Project));
  }
}

export default ProjectController;
