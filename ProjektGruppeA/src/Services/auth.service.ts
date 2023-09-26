import ApiService from "./api.service";
import jwt, {JwtPayload} from 'jsonwebtoken';
type AuthResponse = {
    token:string,
}
class AuthService {

    private service = new ApiService('Auth');
    
    async authorize(username: string, password: string){
        const response: AuthResponse = await this.service.post('/token', { Username: username, Password: password});
        const { token } = response
        this.saveToken(token);
        //return response;
    }

    saveToken(token:string){
        localStorage.setItem('token', token);
    }

    isExpired(){
        debugger //eslint-disable-line
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        try {
            const decodedToken = jwt.decode(token, { complete: true }) as JwtPayload;
            if (decodedToken && decodedToken.payload && decodedToken.payload.exp) {
                const expirationTimestamp = decodedToken.payload.exp * 1000;
                const currentTimestamp = Date.now();
                return expirationTimestamp > currentTimestamp;
            }
            return false; 
        } catch (error) {
            return false; 
        }
    }

    isAuthorized(requiredRole: string){
        if(! this.isExpired()){
            const token = localStorage.getItem('token');
            if (!token) {
                return false;
            }  
            try{
                const {role} = jwt.decode(token, { complete: true }) as JwtPayload;
                return role == requiredRole;
            }catch(error){
                return false;
            }
        }
        return false;
    }
    unsetToken(){
        localStorage.removeItem('token');
    }

}
export default AuthService