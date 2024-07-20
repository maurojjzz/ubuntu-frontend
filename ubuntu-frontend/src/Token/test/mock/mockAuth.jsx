import  MockGoogleUser  from "./mockUser";

 const MockGoogleLogin = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MockGoogleUser);
        }, 1000);
    });
}

export default MockGoogleLogin;