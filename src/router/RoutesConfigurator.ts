import {IAppRoute} from "../core/domain/common/IAppRoute";

class RoutesConfigurator {
    AppRoutes: IAppRoute[];

    constructor() {
        this.AppRoutes = [];
    }

    AddRoute(route: IAppRoute) {
        this.AppRoutes.push(route);
    }

    AddRoutes(routes: IAppRoute[]) {
        routes.map((route) => {
            this.AppRoutes.push(route);
        });
    }
}

export default new RoutesConfigurator();
