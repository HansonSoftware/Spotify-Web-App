import './LoginPage.css'

/* Spotify Authentification */
const authEndpoint:string = "https://accounts.spotify.com/authorize";
// const redirectUri:string = "http://localhost:3000";
const redirectUri:string = "https://spotifywebapp.netlify.app/";
const clientId:string = "fc2f884fd6de426cb2f6f520d7c7e176";
const perms:Array<string> = ["streaming", "user-read-email", "user-read-private", "user-library-read", "user-read-recently-played", "user-library-modify", "user-read-playback-state", "user-modify-playback-state", "user-read-currently-playing"];
const scopes:string = perms.join("%20");
const url:string = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}`;

export default function LoginPage() {
    return (
        <div className="flex flex-col justify-center items-center spacer layered" style={{ minHeight: "100vh" }}>
            <div className="flex flex-col justify-center items-center gap-6 p-6 bg-white/5 bg-opacity-90 backdrop-blur-sm rounded-lg" style={{ minHeight: "65vh", minWidth: "65vh", maxWidth: "80vw"}}> 
                    <h1 className="sm:text-4xl text-3xl font-bold pb-32">Welcome to Spotify Player</h1>
                    <a className="btn btn-primary" href={url}>Login with Spotify</a>
                    <a className="btn btn-disabled" href={url}>Sign up to listen 🎵</a>
            </div> 
        </div>
    )
}
