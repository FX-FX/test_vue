<template>
  <div class="login">
      <el-form :model="dataForm">
        <el-form-item prop="username">
          <el-input v-model="dataForm.username" type="text" auto-complete="off" placeholder="账号" @keyup.enter.native="carriageReturn">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="dataForm.password"
            type="password"
            auto-complete="off"
            placeholder="密码" @keyup.enter.native="carriageReturn">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
        </el-form-item>
      </el-form>
  </div>

</template>

<script>

    export default {
        name: "Login",
        data(){
            return{
                dataForm:{
                  username:"",
                  password:""
                }
            }
        },
      methods:{
          submitForm:function() {
            const userName = this.dataForm.username;
            const passWord = this.dataForm.password;
            if(userName ==""||userName==null){
              alert("账号不能为空ヽ(ー_ー)ノ");
            }else {
              if(passWord==""||passWord==null){
                alert("密码不能为空(•́へ•́╬)");
              }else{
                if(userName=="admin"&&passWord=="123456"){
                  alert("登录成功(^_−)☆")
                  this.$router.replace('/detail');
                }else{
                  alert("账号或密码不正确o(▼皿▼メ;)o")
                }
              }
            }

          },
          carriageReturn(){
              this.submitForm();
          }
      }

    }
</script>

<style >
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 500px;
    background-size: cover;
    margin: 250px auto;
    padding: 0;
  }
  body{
    background:url("../assets/login-bg.jpg") top center no-repeat;
    background-size:cover;
    align-content: center;

  }


</style>
