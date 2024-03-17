import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'
import { KeyboardControls } from '@react-three/drei'
import { Leva } from 'leva'
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <StrictMode>
            <Leva
                fill = {false}
                flat = {false} 
                titleBar = {true}
                collapsed = {true}
                drag = {true}
                hideCopyButton = {true}
            />
            <KeyboardControls 
                map={ [
                    { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
                    { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
                    { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
                    { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
                ] }
            >
                <Canvas shadows camera={{fov: 50, position: [0, 50, 0]}} >
                    <OrbitControls
                        makeDefault 
                        maxDistance={150}
                        minDistance={5}
                        maxPolarAngle={Math.PI * 0.45}
                    />
                    <Experience />
                </Canvas>
            </KeyboardControls>
            
        </StrictMode>
    </>
)