import { createRouter, defineRoute, param, createGroup, type Route } from "type-route";

export const routeDefs = {
    "catalog2": defineRoute(
        {
            "catalogId": param.path.optional.string,
            "search": param.query.optional.string.default("")
        },
        ({ catalogId }) => `/catalog2/${catalogId}`
    )
};

export const routeGroup = createGroup(Object.values(createRouter(routeDefs).routes));

export type PageRoute = Route<typeof routeGroup>;

export const getDoRequireUserLoggedIn: (route: PageRoute) => boolean = () => false;
