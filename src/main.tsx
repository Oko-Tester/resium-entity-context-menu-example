import { createRoot } from "react-dom/client";
import { Ion } from "cesium";
import App from "./App";
import { StrictMode } from "react";
import {
  EntityContextMenu,
  EntityContextMenuProvider,
  type MenuFactory,
} from "resium-entity-context-menu";
import "resium-entity-context-menu/styles.css";
import "./App.css";
import { Viewer } from "resium";

Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN;

const defaultFactory: MenuFactory = (ctx: any) => [
  {
    id: "info",
    label: "Show Info",
    icon: "📋",
    onClick: () => console.log(ctx),
  },
  {
    id: "edit",
    label: "Edit Entity",
    onClick: () => console.log(ctx),
  },
  {
    id: "delete",
    label: "Delete Entity",
    onClick: () => console.log(ctx),
  },
];

const factoriesByType: Record<string, MenuFactory> = {
  Point: (ctx: any) => [
    {
      id: "coordinates",
      label: "Copy Coordinates",
      onClick: () => {
        console.log("Copying coordinates:", ctx);
      },
    },
    { id: "separator", label: "", type: "separator" },
    {
      id: "move",
      icon: "📋",
      label: "Move Point",
      onClick: () => console.log("Moving point:", ctx),
    },
    {
      id: "info",
      label: "Point Info",
      onClick: () => console.log("Point info:", ctx),
    },
    {
      id: "delete",
      label: "Delete Point",
      onClick: () => console.log("Deleting point:", ctx),
    },
  ],
  Polygon: (ctx: any) => [
    {
      id: "area",
      label: "Calculate Area",
      onClick: () => console.log("Calculating area:", ctx),
    },
    {
      id: "options",
      label: "Options",
      type: "submenu",
      items: [
        {
          id: "option1",
          label: "Option 1",
          onClick: () => console.log("Option 1: ", ctx),
        },
        {
          id: "option2",
          label: "Option 2",
          onClick: () => console.log("Option 3: ", ctx),
        },
        {
          id: "option3",
          label: "Option 3",
          onClick: () => console.log("Option 3: ", ctx),
        },
      ],
      onClick: () => console.log("Editing polygon:", ctx),
    },
    {
      id: "delete",
      label: "Delete Polygon",
      onClick: () => console.log("Deleting polygon:", ctx),
    },
  ],
  Polyline: (ctx: any) => [
    {
      id: "length",
      label: "Measure Length",
      icon: "📏",
      onClick: () => console.log("Measuring length:", ctx),
    },
    {
      id: "edit",
      label: "Edit Line",
      onClick: () => console.log("Editing line:", ctx),
    },
    {
      id: "delete",
      label: "Delete Line",
      onClick: () => console.log("Deleting line:", ctx),
    },
  ],
  Billboard: (ctx: any) => [
    {
      id: "changeIcon",
      icon: "🔄",
      label: "Change Icon",
      onClick: () => console.log("Changing icon:", ctx),
    },
    {
      id: "info",
      label: "Billboard Info",
      onClick: () => console.log("Billboard info:", ctx),
    },
    {
      id: "delete",
      label: "Remove Billboard",
      onClick: () => console.log("Removing billboard:", ctx),
    },
  ],
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Viewer full style={{ width: "100vw", height: "100vh" }}>
      <EntityContextMenuProvider
        defaultFactory={defaultFactory}
        factoriesByType={factoriesByType}
      >
        <App />
        <EntityContextMenu />
      </EntityContextMenuProvider>
    </Viewer>
  </StrictMode>
);
