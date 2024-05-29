```vue
<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" class="login-box">
      <h3>欢迎来到管理后台</h3>
      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 4,
            max: 16,
            message: "长度在 4 到 16 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 8,
            max: 16,
            message: "长度在 8 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: "恭喜你,登录成功",
            type: "success",
            center: true,
            duration: 1500,
          });

          this.$router.push("/index");
        } else {
          this.$message({
            message: "请输入用户名或密码",
            type: "error",
            center: true,
            duration: 1500
          });
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login-box {
  width: 350px;
  margin: 200px auto;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 30px #e4e7ed;
}
</style>
```

