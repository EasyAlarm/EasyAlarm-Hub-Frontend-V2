import { css } from "@emotion/react";

export const sideNavbarStyles = () => css`
    position: sticky;
    background: gray;
    height: 100vh;
    z-index: 1001;
    top: 0px;
    min-width: 14rem;
    max-width: 146rem;
    
    background: #232323;
    
    .navbar-content {
       padding-inline-start: 1.5rem;
    }
    
    .header {
        color: white;
        padding-bottom: 2rem;
        padding-top: 1rem;
    }
    
    .items-list {
        padding-inline-start: 1rem;
        list-style: none;
    }
    
    a {
        color: #867B7B;
        font-size: larger;
        text-decoration: none;
    }
    
    .item-title {
        margin-bottom: 2rem;
    }
    
    .active {
        color: white;
    }
    
    .logout-button {
        position: absolute;
        bottom: 0;
        margin-bottom: 2rem;
    }

`;