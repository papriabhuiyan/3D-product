//import React from 'react';
import {Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import Shirt from './Shirt';


//adding something to check
const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Environment preset ="city" />
      <CameraRig>
        {/* <Backdrop> */}
          <Center>
            <Shirt />
          </Center>
        {/* </Backdrop> */}
      </CameraRig>
    </Canvas>

  )
};

export default CanvasModel