<template>
  <div class="wrapper">
    <LeftSidebar />
    <RightSidebar />
  </div>
</template>

<script>
import RightSidebar from './components/RightSidebar';
import LeftSidebar from './components/LeftSidebar';

export default {
  components: { RightSidebar, LeftSidebar },
  data: () => ({
    color: "#1b0dd3"
  })
}
</script>
