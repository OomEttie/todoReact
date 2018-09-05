import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { create, list } from "../../server/controllers/todos";

/**
 * / route
 *
 * @class ApiRoute
 */
export class ApiRoute extends BaseRoute {
  /**
   * Create the routes.
   *
   * @class ApiRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[API::create] Creating api route.");

    //add home page route
    router.get("/api", (req: Request, res: Response, next: NextFunction) => {
      new ApiRoute().index(req, res, next);
    });
    router.get(
      "/api/todos",
      (req: Request, res: Response, next: NextFunction) => {
        new ApiRoute().listTodos(req, res, next);
      }
    );
    router.post(
      "/api/todos",
      (req: Request, res: Response, next: NextFunction) => {
        new ApiRoute().postTodos(req, res, next);
      }
    );
  }

  /**
   * Constructor
   *
   * @class ApiRoute
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * The users page route.
   *
   * @class UsersRoute
   * @method users
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public index(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = "API Route";

    //set message
    let options: Object = {
      message: "Activating API route test"
    };

    //render template
    this.render(req, res, "api", options);
  }

  //GET
  public listTodos(req: Request, res: Response, next: NextFunction) {
    // const response = create("TEST");
    // console.log(response);
    // res.send(response);

    list()
      .then((data: any) => {
        const result = data.map((item:any) => {
          return item.dataValues;
        })
        console.log(result);
        res.send(result);
      })
      .catch((error: any) => {
        console.log(error);
        return error;
      });
  }

  //POST
  public postTodos(req: Request, res: Response, next: NextFunction) {
    // const response = create("TEST");
    // console.log(response);
    // res.send(response);

    create("testing")
      .then((data: any) => {
        res.send(data.dataValues);
      })
      .catch((error: any) => {
        return error;
      });
  }
}
