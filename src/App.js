import './App.css';
import React from 'react';
import Header from "./components/Header"


function app() {
  
  return (
<div>
  <Header name="sparsh" title="my title is diff" />
  <Header name="bharat" title= "different title i have"/>
  <Header name="pranav" title="i got different title"/>
</div>
  );
}

export default app;