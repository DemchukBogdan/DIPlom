<template>
  <z-view>
    {{ category }}
    <button v-on:click="setState">{{ state ? "on" : "off" }}</button>
  </z-view>
</template>
<script>
/*eslint-disable*/
// just $route.params.category and $route.params.qty
export default {
  data: function () {
    return {
      state: "",
    };
  },

  methods: {
    getState: function () {
      var app = this;
      fetch(`http://localhost:3000/devices/edit/60ad139e2e00712fc4d60be7`)
        .then((response) => response.json())
        .then((data) => (app.state = data.state))
        .catch(function (error) {
          console.log(error.message);
        });
    },
    setState: function () {
      let formData = new FormData();
      formData.append("id", "60ad139e2e00712fc4d60be7");
      formData.append("State", !this.state);
      const requestOptions = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "60ad139e2e00712fc4d60be7",
          State: !this.state,
        }),
      };
      
      fetch(`http://localhost:3000/devices/edit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "60ad139e2e00712fc4d60be7",
          State: !this.state,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch(function (error) {
          console.log("err", error.message);
        });
    },
  },

  created() {
    this.getState();
  },

  computed: {
    category() {
      if (this.$zircle.getParams() !== undefined) {
        return this.$zircle.getParams().category;
      }
    },
    qty() {
      if (this.$zircle.getParams() !== undefined) {
        return this.$zircle.getParams().qty;
      }
    },
  },
};
</script>

