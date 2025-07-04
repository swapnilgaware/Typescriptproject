import { index, route} from "@rect-router/dev/routes";

export default [
    index("./home.tsx"),
    route("products/:pid","./")
];

