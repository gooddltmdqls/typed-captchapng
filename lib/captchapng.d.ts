import NodePnglib from "node-pnglib";

export default captchapng;

declare class captchapng extends NodePnglib {
    public constructor(width: number, height: number, dispNumber: number);
}