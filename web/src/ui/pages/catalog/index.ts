import { lazy } from "react";
import { CatalogSwitcherButton } from "./CatalogSwitcherButton";
export * from "./route";
export const LazyComponent = lazy(() => import("./Catalog"));
