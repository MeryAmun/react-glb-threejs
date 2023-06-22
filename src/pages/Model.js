import { useGLTF, Stage, PresentationControls } from "@react-three/drei";



export default function Model(props) {
    
    // materials["UnitBox"]
        const { scene } = useGLTF("/testglb.glb");
        return <primitive object={scene} {...props} />
}