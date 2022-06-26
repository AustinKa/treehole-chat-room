<template>
    <div class="container">
        <div class="login-wrapper">
            <div class="header">Login</div>
            <div class="form-wrapper">
                <input type="text" class="input-item"  v-model='user.username' placeholder="username">
                <input type="password" class="input-item"  v-model='user.password' placeholder="password">
                <button class="bin" @click="save">Login</button>
            </div>
            <div class="msg">
                Dont't have account?
                <a href="#">Sign up</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginView",
        methods: {
            save(){
                console.log(this.user)
                if(this.user.password != ''){
                    sessionStorage.setItem("user", JSON.stringify({username: this.user.username}))
                    this.$router.push('/home')
                }
            }
        },
        data(){
            return{
                user: {}
            }
        }
    }
</script>

<style >
    .container {
        height: 100%;
        background-image: linear-gradient(to right,#fbc2eb,#a6c1ee);
    }

    .container .login-wrapper {
        background-color: #fff;
        width: 358px;
        height: 588px;
        border-radius: 15px;
        padding: 0 50px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .container .header {
        font-size: 38px;
        font-weight: bold;
        text-align: center;
        line-height: 200px;
    }

    .container  .input-item {
        display: block;
        width: 100%;
        margin-bottom: 20px;
        border: 0;
        padding: 10px;
        border-bottom: 1px solid rgb(128, 125, 125);
        outline: none;
    }


    .container .input-item::placeholder {
        text-transform: uppercase;
    }

    .container .bin {
        text-align: center;
        padding: 10px;
        width: 100%;
        margin-top: 40px;
        background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
        color: #fff;
    }

    .container .msg {
        text-align: center;
        line-height: 88px;
    }

    .container a {
        text-decoration-line: none;
        color: #abc1ee;
    }

</style>
