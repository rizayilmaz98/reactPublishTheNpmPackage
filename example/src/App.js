import React from 'react'
import { Button } from "eagleuibutton06"
import 'eagleuibutton06/dist/index.css'

const App = () => {
  return (
    <div>
      <Button type="primary" text="Primary Button"/>
      <Button type="default" text="Default Button"/>
      <Button type="dashed" text="Dashed Button"/>
      <br/>
      <Button type="text" text="Text Button"/>
      <Button type="link" text="Link Button"/>
    </div>
  )
}

export default App
