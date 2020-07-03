import {IAppRoute} from "../core/domain/common/IAppRoute";

class AppRoute {
    Prefix: string;

    constructor(prefix: string) {
        this.Prefix = prefix;
    }

    createRoute(path: string, component: any, exact: boolean = true): IAppRoute {
        return { exact, path: `${this.Prefix}/${path}`, component }
    }
}

export default AppRoute;
