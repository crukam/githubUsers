import get from "axios";



export const  githubUserRepos = async(user)=>{

    
    try{
       const response = await get(`https://api.github.com/users/${user}/repos`); 
        return response.data;
    }catch (err){
        return err;
    }
}
