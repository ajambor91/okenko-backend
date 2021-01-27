import crypto from 'crypto';

class JWTSecret{
    
    token: string = null;

    constructor() {
        this.generateToken();
    }

    private generateToken(): void {
        this.token = crypto.randomBytes(64).toString('hex');
        console.log(this.token);
    }

}

const jwtSecret = new JWTSecret();
