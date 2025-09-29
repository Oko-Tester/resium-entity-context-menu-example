import { Entity as ResiumEntity } from "resium";
import { Cartesian2, Cartesian3, Color } from "cesium";
import { useEntityContextMenu } from "resium-entity-context-menu";

function App() {
  const { showMenu } = useEntityContextMenu();

  return (
    <>
      <ResiumEntity
        name="Tokyo"
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        point={{ pixelSize: 10, color: Color.RED }}
        onRightClick={(pos, target) => {
          showMenu({
            clickedAt: new Date().toISOString(),
            entityId: target.id.id,
            position: pos.position ?? new Cartesian2(),
            entityData: target.primitive,
            entityType: "Point",
          });
        }}
      />
      <ResiumEntity
        name="New York"
        position={Cartesian3.fromDegrees(-74.0, 40.716667, 100)}
        point={{ pixelSize: 10, color: Color.ORANGE }}
        onRightClick={(pos, target) =>
          showMenu({
            clickedAt: new Date().toISOString(),
            entityId: target.id.id,
            position: pos.position ?? new Cartesian2(),
            entityData: target.primitive,
            entityType: "Billboard",
          })
        }
      />
      <ResiumEntity
        name="Köln"
        position={Cartesian3.fromDegrees(6.95, 50.933333, 100)}
        point={{ pixelSize: 10, color: Color.BLACK }}
        onRightClick={(pos, target) =>
          showMenu({
            clickedAt: new Date().toISOString(),
            entityId: target.id.id,
            position: pos.position ?? new Cartesian2(),
            entityData: target.primitive,
            entityType: "Polyline",
          })
        }
      />
      <ResiumEntity
        name="Dubai"
        position={
          new Cartesian3(
            3317626.187407601,
            4738061.226661606,
            2679116.7247839617
          )
        }
        point={{ pixelSize: 10, color: Color.GREEN }}
        onRightClick={(pos, target) =>
          showMenu({
            clickedAt: new Date().toISOString(),
            entityId: target.id.id,
            position: pos.position ?? new Cartesian2(),
            entityData: target.primitive,
            entityType: "Polygon",
          })
        }
      />
    </>
  );
}

export default App;
