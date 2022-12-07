/* Spotify Authentification */
const authEndpoint:string = "https://accounts.spotify.com/authorize";
const redirectUri:string = "http://localhost:3000";
const clientId:string = "fc2f884fd6de426cb2f6f520d7c7e176";
const perms:Array<string> = ["streaming", "user-read-email", "user-read-private", "user-library-read", "user-library-modify", "user-read-playback-state", "user-modify-playback-state", "user-read-currently-playing"];
const scopes:string = perms.join("%20");
const url:string = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}`;

export default function LoginPage() {
    return (
        <div className="flex flex-col gap-2 justify-center items-center" style={{ minHeight: "100vh" }}>
            <h1 className="text-lg">Welcome to Spotify Player</h1>
            <a className="btn" href={url}>Login with Spotify</a>
        </div>
    )
}
