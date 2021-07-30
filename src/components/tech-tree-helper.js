const EPSILON = 4;

export const linkPathMaker = (p0, p1, linkProps) => {
    const { x: x0, y: y0, width: w0, height: h0 } = p0;
    const { x: x1, y: y1, width: w1, height: h1 } = p1;

    const [sx, sy] = [Math.floor(x0 + w0 / 2), Math.floor(y0 + h0 / 2)];
    const [tx, ty] = [Math.floor(x1 + w1 / 2), Math.floor(y1 + h1 / 2)];
    const { className: type } = linkProps;
    if (type === "offspring") {
        if (!(Math.abs(sx - tx) < 50))
            return `
      M ${sx} ${sy + h0 / 2} L ${sx} ${sy + h0 / 2 + 10}
      M ${sx} ${sy + h0 / 2 + 10}
        Q ${tx} ${sy + (ty - sy) / 2} ${tx} ${ty - 10 - h1 / 2}
      M ${tx} ${ty - 10 - h1 / 2} L ${tx} ${ty}
      `;
    }

    // same row
    if (Math.abs(sy - ty) < EPSILON) {
        const yOffset = -(tx - sx) / 3;
        return `M ${sx} ${sy} Q ${(sx + tx) / 2} ${sy + yOffset} ${tx} ${ty}`;
    }
    // same column
    if (Math.abs(sx - tx) < EPSILON) {
        return `M ${sx} ${sy} L ${tx} ${ty}`;
    }

    return `M ${sx} ${sy} Q ${tx} ${sy + (ty - sy) / 2} ${tx} ${ty}`;
};

export const getNodeDOMPositions = (links, el, pathMaker) => {
    if (!el) return [];
    return links.map(linkProps => {
        const from = el.querySelector(`#${linkProps.from}`);
        const to = el.querySelector(`#${linkProps.to}`);
        if (!from || !to) return "";

        // get relative coords with respect to el (which contains p0 and p1)
        const origin = el.getBoundingClientRect();
        const p0 = from.getBoundingClientRect();
        const p1 = to.getBoundingClientRect();
        p0.x = p0.x - origin.x;
        p0.y = p0.y - origin.y;
        p1.x = p1.x - origin.x;
        p1.y = p1.y - origin.y;

        return { pathData: pathMaker(p0, p1, linkProps) };
    });
};
