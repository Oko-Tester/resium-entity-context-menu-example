# Resium Entity Context Menu - Beispielprojekt

Dieses Repository zeigt, wie das `resium-entity-context-menu` npm-Paket in einer React + Cesium Anwendung verwendet wird.

## 🚀 Überblick / Live Demo

🌐[Demo](https://resium-entitiy-context-menu-example.okotester.de)

Das `resium-entity-context-menu` Paket ermöglicht es, Kontext-Menüs für Cesium-Entitäten in Resium-Anwendungen zu erstellen. Mit einem einfachen Rechtsklick auf eine Entität können verschiedene Aktionen ausgeführt werden.

## 📦 Installation

```bash
npm install resium-entity-context-menu
```

## 🛠️ Setup

### 1. Provider einrichten

Umschließe deine Anwendung mit dem `EntityContextMenuProvider`:

```tsx
import {
  EntityContextMenuProvider,
  EntityContextMenu,
} from "resium-entity-context-menu";
import "resium-entity-context-menu/styles.css";

// Definiere Standard-Menü-Items
const defaultFactory = (ctx) => [
  {
    id: "info",
    label: "Show Info",
    onClick: () => console.log(ctx),
  },
  // weitere Items...
];

// Definiere typ-spezifische Menü-Items
const factoriesByType = {
  Point: (ctx) => [
    {
      id: "coordinates",
      label: "Copy Coordinates",
      onClick: () => console.log("Copying coordinates:", ctx),
    },
    // weitere Point-spezifische Items...
  ],
  // weitere Typen...
};

<EntityContextMenuProvider
  defaultFactory={defaultFactory}
  factoriesByType={factoriesByType}
>
  <App />
  <EntityContextMenu />
</EntityContextMenuProvider>;
```

### 2. Hook in Komponenten verwenden

```tsx
import { useEntityContextMenu } from "resium-entity-context-menu";
import { Viewer, Entity as ResiumEntity } from "resium";

function App() {
  const { showMenu } = useEntityContextMenu();

  return (
    <Viewer full>
      <ResiumEntity
        name="Tokyo"
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        point={{ pixelSize: 10, color: Color.RED }}
        onRightClick={(pos, target) =>
          showMenu({
            clickedAt: new Date().toISOString(),
            entityId: target.id.id,
            position: pos.position ?? new Cartesian2(),
            entityData: target.primitive,
            entityType: "Point", // Bestimmt welche Menü-Items angezeigt werden
          })
        }
      />
    </Viewer>
  );
}
```

## 🎯 Features

- **Typ-spezifische Menüs**: Verschiedene Menü-Items basierend auf Entitäts-Typ
- **Flexible Konfiguration**: Einfache Anpassung von Menü-Items und Aktionen
- **Cesium Integration**: Nahtlose Integration mit Cesium und Resium
- **TypeScript Support**: Vollständige TypeScript-Unterstützung

## 🔧 Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build erstellen
npm run build
```

## 📋 Voraussetzungen

- React 18+
- Cesium 1.133+
- Resium 1.19+
- Gültiger Cesium Ion Token (in `.env` als `VITE_CESIUM_TOKEN`)

## 🤝 Mitwirken

Dieses Beispielprojekt zeigt die grundlegende Verwendung. Für Beiträge zum Hauptpaket besuche das [resium-entity-context-menu Repository](https://www.npmjs.com/package/resium-entity-context-menu).

## 📄 Lizenz

MIT
