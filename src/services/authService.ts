
class AuthService {
    
    private readonly ACCESS_TOKEN_LOCAL_STORAGE_KEY = "access_token";

    public setToken(accessToken: string)
    {
        localStorage.setItem(this.ACCESS_TOKEN_LOCAL_STORAGE_KEY, accessToken);
    }
    
    public isAuthenticated(): boolean
    {
        return this.getToken() !== null;
    }
    
    public getToken(): string | null
    {
        return localStorage.getItem(this.ACCESS_TOKEN_LOCAL_STORAGE_KEY);
    }
    
    public removeToken()
    {
        localStorage.removeItem(this.ACCESS_TOKEN_LOCAL_STORAGE_KEY);
    }

}

const authService = new AuthService();
export default authService;