<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu
          mode="horizontal"
          theme="dark"
          active-name="1"
        >
          <div class="layout-logo"><img
              src="../images/logo.jpg"
              alt=""
              style="height:100%;width:100%"
            ></div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>首页</BreadcrumbItem>
          <BreadcrumbItem>赛事</BreadcrumbItem>
          <BreadcrumbItem>赛程安排</BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <Layout>
            <Sider
              hide-trigger
              :style="{background: '#fff'}"
            >
              <Menu
                active-name="1-2"
                theme="light"
                width="auto"
                :open-names="['1']"
                @on-select="changeMenu"
              >
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    东莞1V1篮球..
                  </template>
                  <MenuItem name="1-1">城区片区</MenuItem>
                  <Submenu name="1-2">
                    <template slot="title">
                      滨海片区
                    </template>
                    <MenuItem name="1-2-1">男子组</MenuItem>
                    <MenuItem name="1-2-2">女子组</MenuItem>
                  </Submenu>
                  <MenuItem name="1-3">...</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <Table
                border
                ref="selection"
                :columns="column"
                :data="tableData.list"
                @on-selection-change="selectionChange"
              ></Table>
              <div style="margin: 10px;overflow: hidden">
                <div style="float: left;">
                  <Button @click="handleSelectAll(true)">全选</Button>
                  <Button
                    type="primary"
                    @click="distribute('abf349a8b4ff11e9a0b400163e027b24')"
                  >分配给A场次</Button>
                  <Button
                    type="primary"
                    @click="distribute('b748f4e5b4ff11e9a0b400163e027b24')"
                  >分配给B场次</Button>
                </div>
                <div style="float: right;">
                  <Page
                    :total="tableData.total"
                    :current="1"
                    @on-change="changePage"
                  ></Page>
                </div>
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2019 &copy; thinkmoon</Footer>
    </Layout>
  </div>
</template>
<script>
import qs from 'qs';
export default {
  data() {
    return {
      lists: [],
      column: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "对阵时间",
          key: "startTime"
        },
        {
          title: "黑方",
          key: "userA"
        },
        {
          title: "红方",
          key: "userB"
        }
      ],
      page: 1,
      type: 1,
      tableData: []
    };
  },
  methods: {
    async distribute(id) {
      this.$axios({
        method: "post",
        url: "/competition/match/info/save/match/distribution",
        data: qs.stringify({
          matchs: this.lists.join(","),
          distributionId: id
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      this.tableData = []
    },
    selectionChange(lists) {
      this.lists = [];
      let array = [];
      for (let i = 0; i < lists.length; i++) {
        console.log(lists[i]);
        array.push(lists[i].id);
      }
      this.lists = array;
    },
    changePage(page) {
      this.page = page;
      this.$axios
        .get(
          "/competition/match/info/selectByPageList?competitionAreaId=ace5fd0349d540e6b16090f165370127&competitionId=1&type=" +
            this.type +
            "&page=" +
            this.page
        )
        .then(res => {
          this.tableData = res.data.data;
        });
    },
    changeMenu(name) {
      let data = name.split("-");
      if (data.length != 3) {
        return;
      } else {
        this.type = data[2];
        this.$axios
          .get(
            "/competition/match/info/selectByPageList?competitionAreaId=ace5fd0349d540e6b16090f165370127&competitionId=1&type=" +
              this.type
          )
          .then(res => {
            this.tableData = res.data.data;
          });
      }
    },
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    }
  }
};
</script>
