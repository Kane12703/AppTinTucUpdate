//kiểm tra emai,password
//kiểm tra email có trong database 
//nếu có kt password
//nếu pass đúng trả về thông tin user
//pass sai trả về null
const userModel=require('./Model');
const bcrypt=require('bcryptjs');

const AppConstants=require('../../constants/AppConstants');

const login = async (email,password) => {
    try {
       let user=await userModel.findOne({email});
       if(user){
            const isMatch=bcrypt.compareSync(password,user.password);
            return isMatch ? user : false;
       } 
    } catch (error) {
        console.log('user service login errol',error);
        throw error;
    }
    return false;
    
}

const register= async (email,password,name) => {
    try {
        let user =await userModel.findOne({email});
        if(!user){
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            await userModel.create({
                email:email,
                password:hash,
                name:name,
                role:AppConstants.ROLES.USER,
            });
            return true;
        }
    } catch (error) {
        console.log('Use service register error: ',error)
    }
    return false;
}

module.exports={login,register}

var data =[
    {_id:1 ,email:'abd@gmail.com',password:'1',name:'An'},
    {_id:2 ,email:'kja@gmail.com',password:'2',name:'Minh'},
    {_id:3 ,email:'sss@gmail.com',password:'3',name:'Linh'},
    {_id:4 ,email:'cbc@gmail.com',password:'4',name:'Phúc'}
]
