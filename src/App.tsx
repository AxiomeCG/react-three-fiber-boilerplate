import { Canvas } from "@react-three/fiber";
import "./App.scss";
import { Sphere } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <Sphere>
          <meshStandardMaterial color="red" />
        </Sphere>
        <pointLight position={[0, 5, 0]} intensity={1} color="white" />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
