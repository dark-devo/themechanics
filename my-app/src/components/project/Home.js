import React from "react";
import Employee from "../employee";
import Task from "./task";

const Home = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand">Navbar</a>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <a class="navbar-brand">Sign Out</a>
                        </div>
                    </nav>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div class="position-sticky pt-3">
                        
                            <ul class="nav flex-column">
                            
                            <li class="nav-item">
                            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>DASHBOARD</span>
                            <a class="nav-link"  href="#">
                                <span i data-feather="home"></span>
                                </a>
                            </h6>
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">
                                <span data-feather="users"></span>
                                EMPLOYEES
                                </a>                         
                            </li>
                            <li class="nav-item">
                                    <a class="nav-link" href="#">
                                <span data-feather="shopping-cart"></span>
                                INVITE
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                <span data-feather="bar-chart-2"></span>
                               PROGRESS
                                </a>
                            </li>
                            </ul>

                            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Projects</span>
                            <a class="link-secondary" href="#" aria-label="Add a new report">
                                <span data-feather="plus-circle"></span>
                            </a>
                            </h6>
                            <ul class="nav flex-column mb-2">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Project 1
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Project 2
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                <span data-feather="file-text"></span>
                                <u>Add new project</u>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </nav>

                        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 class="h2">Dashboard</h1>
                                <div class="btn-toolbar mb-2 mb-md-0">
                                    <div class="btn-group me-2">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Add</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Remove</button>
                                    </div>
                                    <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    <span data-feather="calendar"></span>
                                    Project 1
                                    </button>
                                </div>
                            </div>

                            <div className="main-bar"> 
                                <Employee/>
                                <Task/>
                            </div> 

                        </main>  
                    </div>
                </div>          
            </div>
        </div>
    );

};

export default Home;