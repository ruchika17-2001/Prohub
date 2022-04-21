import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Screen.css";

function Home() {
  
  return (

    // <h1>This is home page</h1>
   

    

    <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Welcome to,</div>
                <div class="text-2">ProHub</div>
                <div class="text-3">The Project Library</div>
                <a href="/projects">Explore</a>
            </div>
        </div>
    </section>
  
  );
}

export default Home;
