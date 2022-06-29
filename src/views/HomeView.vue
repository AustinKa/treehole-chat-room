<template>
  <div class="home">
    <chat></chat>
  </div>
</template>

<script>
// @ is an alias to /src
import Chat from "@/components/Chat";
export default {
  name: 'HomeView',
  components: {
    Chat
  }
}
</script>
