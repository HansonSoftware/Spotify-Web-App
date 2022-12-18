import './ExtraStyles.css'
import Logo from '../assets/images/logo.png'

/* Spotify Authentification */
const authEndpoint:string = "https://accounts.spotify.com/authorize";
// const redirectUri:string = "http://localhost:3000";
const redirectUri:string = "https://spotifywebapp.netlify.app/";
const clientId:string = "fc2f884fd6de426cb2f6f520d7c7e176";
const perms:Array<string> = ["streaming", "user-read-email", "user-read-private", "user-library-read", "user-read-recently-played", "user-library-modify", "user-read-playback-state", "user-modify-playback-state", "user-read-currently-playing"];
const scopes:string = perms.join("%20");
const url:string = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}`;
const signup:string = "https://www.spotify.com/us/signup"

export default function LoginPage() {
    return (
        <div className="flex flex-col justify-center items-center spacer layered" style={{ minHeight: "100vh", minWidth: "100vw" }}>
            <div className="flex flex-col justify-center items-center gap-6 p-6 bg-white/5 bg-opacity-50 backdrop-blur-3xl rounded-2xl" style={{ minHeight: "65vh", minWidth: "40vw", maxWidth: "80vw", maxHeight: "80vh"}}> 
                    <h1 className="sm:text-4xl text-3xl font-bold">Welcome to Melodify!</h1>
                    <img src={Logo} alt="logo" style={{height: "350px", width: "350px"}} />
                    <a className="btn btn-outline rounded-2xl" href={url}>Login with Spotify</a>
                    <a className="btn btn-primary rounded-2xl" href={signup} target="_blank">Sign up to listen 🎶</a>
            </div> 
        </div>
    )
}
