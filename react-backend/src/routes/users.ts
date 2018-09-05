import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";


/**
 * / route
 *
 * @class IndexRoute
 */
export class UsersRoute extends BaseRoute {

  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[UsersRoute::create] Creating users route.");

    //add home page route
    router.get("/users", (req: Request, res: Response, next: NextFunction) => {
      new UsersRoute().index(req, res, next);
    });
  }

  /**
   * Constructor
   *
   * @class IndexRoute
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
    this.title = "React Backend / users";

    //set message
    let options: Object = {
      "message": "Activating users route"
    };

    //render template
    this.render(req, res, "users", options);
  }
}
