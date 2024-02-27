/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRegisterEvents, useSigma } from "@react-sigma/core";
import { useEffect, useState } from "react";

const GraphEvents: React.FC = () => {
const registerEvents = useRegisterEvents();
const sigma = useSigma();
const [draggedNode, setDraggedNode] = useState<string | null>(null);

useEffect(() => {
    // Register the events
    registerEvents({
    downNode: (e) => {
        setDraggedNode(e.node);
        sigma.getGraph().setNodeAttribute(e.node, "highlighted", true);
    },
    mouseup: () => {
        if (draggedNode) {
        setDraggedNode(null);
        sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
        }
    },
    mousedown: () => {
        // Disable the autoscale at the first down interaction
        if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
    },
    mousemove: (e) => {
        if (draggedNode) {
        // Get new position of node
        const pos = sigma.viewportToGraph(e);
        sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
        sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

        // Prevent sigma to move camera:
        e.preventSigmaDefault();
        e.original.preventDefault();
        e.original.stopPropagation();
        }
    },
    touchup: () => {
        if (draggedNode) {
        setDraggedNode(null);
        sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
        }
    },
    touchdown: () => {
        // Disable the autoscale at the first down interaction
        if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
    },
    touchmove: (e:any) => {
        if (draggedNode) {
        // Get new position of node
        const pos = sigma.viewportToGraph(e);
        sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
        sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

        // Prevent sigma to move camera:
        e.preventSigmaDefault();
        e.original.preventDefault();
        e.original.stopPropagation();
        }
    },
    });
}, [registerEvents, sigma, draggedNode]);

return null;
};

export default GraphEvents