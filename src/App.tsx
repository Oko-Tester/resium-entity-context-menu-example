import { Viewer, Entity as ResiumEntity } from "resium";
import { Cartesian2, Cartesian3, Color } from "cesium";
import { useEntityContextMenu } from "resium-entity-context-menu";

function App() {
  const { showMenu } = useEntityContextMenu();
  return (
    <Viewer
      full
      style={{ width: "100vw", height: "100vh" }}
    >
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
            entityType: "Point",
          })
        }
      ></ResiumEntity>
      <ResiumEntity
        name="New York"
        position={Cartesian3.fromDegrees(-74.0, 40.716667, 100)}
        point={{ pixelSize: 10, color: Color.RED }}
        onRightClick={(pos, target) =>
          showMenu({
            clickedAt: new Date().toISOString(),
            entityId: target.id.id,
            position: pos.position ?? new Cartesian2(),
            entityData: target.primitive,
            entityType: "Billboard",
          })
        }
      ></ResiumEntity>
      <ResiumEntity
        name="Köln"
        position={Cartesian3.fromDegrees(6.95, 50.933333, 100)}
        point={{ pixelSize: 10, color: Color.RED }}
        onRightClick={(pos, target) =>
          showMenu({
            clickedAt: new Date().toISOString(),
            entityId: target.id.id,
            position: pos.position ?? new Cartesian2(),
            entityData: target.primitive,
            entityType: "Polyline",
          })
        }
      ></ResiumEntity>
    </Viewer>
  );
}

export default App;
