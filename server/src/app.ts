/* eslint-disable no-console */
import bodyParser from 'body-parser';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import Controller from './controllers/base.controller';

class App {
  public app: Application;

  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;
    this.app.use(express.json());

    this.initMiddlewares();
    this.initControllers(controllers);
  }

  private initControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use(
        `/api/${process.env.VERSION || 'v0'}/${controller.path}`,
        controller.router
      );
    });
  }

  private initMiddlewares() {
    // Morgan Middleware
    if (process.env.NODE_ENV === 'development') this.app.use(morgan('dev'));

    // Body Parser Middleware
    this.app.use(bodyParser.json());
  }

  static connectToMongoDB(db: string) {
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Connected to DB'))
      .catch(() => console.error('Failed to connect to DB'));
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}...`);
    });
  }
}

export default App;
