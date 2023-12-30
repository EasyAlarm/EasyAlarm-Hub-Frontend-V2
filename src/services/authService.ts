
class AuthService {
    
    private readonly ACCESS_TOKEN_LOCAL_STORAGE_KEY = "access_token";
    private readonly REFRESH_TOKEN_LOCAL_STORAGE_KEY = "refresh_token";

    public setAccessToken(accessToken: string)
    {
        localStorage.setItem(this.ACCESS_TOKEN_LOCAL_STORAGE_KEY, accessToken);
    }
    
    public setRefreshToken(refreshToken: string)
    {
        localStorage.setItem(this.REFRESH_TOKEN_LOCAL_STORAGE_KEY, refreshToken);
    }
    
    public isAuthenticated(): boolean
    {
        return this.getRefreshToken() !== null;
    }
    
    public getAccessToken(): string | null
    {
        return localStorage.getItem(this.ACCESS_TOKEN_LOCAL_STORAGE_KEY);
    }

    public getRefreshToken(): string | null
    {
        return localStorage.getItem(this.REFRESH_TOKEN_LOCAL_STORAGE_KEY);
    }
    
    public removeAccessToken()
    {
        localStorage.removeItem(this.ACCESS_TOKEN_LOCAL_STORAGE_KEY);
    }
    
    public removeRefreshToken()
    {
        localStorage.removeItem(this.REFRESH_TOKEN_LOCAL_STORAGE_KEY);
    }

}

const authService = new AuthService();
export default authService;