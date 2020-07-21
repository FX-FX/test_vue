<template>
  <div class="login">
      <el-form :model="dataForm">
        <el-form-item prop="username">
          <el-input v-model="dataForm.username" type="text" auto-complete="off" placeholder="账号">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="dataForm.password"
            type="password"
            auto-complete="off"
            placeholder="密码">
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
            alert(JSON.stringify(this.dataForm))

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
    margin: 0 auto;
    padding: 0;
  }
  body{
    background:url("../assets/login-bg.jpg") top center no-repeat;
    background-size:cover;
    align-content: center;

  }


</style>
