<template>
  <Header>
    <Menu
      mode="horizontal"
      theme="dark"
      active-name="1"
    >
      <div class="layout-logo">
        <img
          src="../images/logo.jpg"
          alt
          style="height:100%;width:100%"
        />
      </div>
      <!-- <div class="layout-nav">
        <MenuItem name="1">
        <Icon type="ios-navigate"></Icon>
        场次分配
        </MenuItem>
        <MenuItem name="2">
        <Icon type="ios-keypad"></Icon>
        赛程安排
        </MenuItem>
        <MenuItem name="3">
        <Icon type="ios-analytics"></Icon>
        Item 3
        </MenuItem>
        <MenuItem name="4">
        <Icon type="ios-paper"></Icon>
        Item 4
        </MenuItem>
      </div> -->
    </Menu>
  </Header>
</template>
<script>
export default {
  name: "M-Header"
};
</script>