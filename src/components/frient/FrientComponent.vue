<template>
    <div>
        <el-col :span="4">
            <el-card style="width: 300px; height: 300px; color: #333">
                <div style="padding-bottom: 10px; border-bottom: 1px solid #ccc">好友列表<span style="font-size: 12px">（点击聊天气泡开始聊天）</span></div>
                <div style="padding: 10px 0" v-for="user in friends" :key="user.username">
                    <span>{{ user.noteName }}</span>
                    <i class="el-icon-chat-dot-round" style="margin-left: 10px; font-size: 16px; cursor: pointer"
                       @click="$emit('selectchatUser',user.toId)"></i>
                    <span style="font-size: 12px;color: limegreen; margin-left: 5px" v-if="user.toId === chatUser">chatting...</span>
                </div>
            </el-card>
        </el-col>
    </div>
</template>

<script>
    import {getFriendsByUserId} from "@/api/friends";

    export default {
        name: "frientComponent",
        props: ['userId','chatUser'],
        data() {
          return{
              friends: [],
          }
        },
        created() {
            this.friendsInit();
        },
        methods:{
            friendsInit(){
                getFriendsByUserId(this.userId).then(resp=>{
                    this.friends = resp.data.data
                })
            }
        }
    }
</script>

<style scoped>

</style>
