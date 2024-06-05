import { useEffect } from "react";


const CLIENT_ID = "Ov23liHD6YGwF8egIPLO";

export default function Projects() {

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const codeParam = urlParams.get("code");
        console.log(codeParam);
    }, []);

    function loginWithGithub() {
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID);
    }
        

    
    return (
        <>
        <h1>Projects</h1>
        <button onClick={loginWithGithub}>
            Login with github
        </button>
        </>
        
    )
}