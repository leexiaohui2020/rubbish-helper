<template>
  <div class="container">
    <div class="container-header">
      <img :src="LogoUrl" class="container-header-logo">
    </div>
    <slot />
    <div class="container-footer">© 2020</div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import LogoUrl from '@/assets/logo.png';

export default {
  name: 'Main',
  data() {
    return {
      LogoUrl,
    };
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
