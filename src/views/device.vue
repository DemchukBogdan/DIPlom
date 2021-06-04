<template>
  <z-view>
    {{ category }}
    <button v-on:click="setState">{{ state ? 'on' : 'off' }}</button>
  </z-view>
</template>
<script>
/*eslint-disable*/
import axios from 'axios';
// just $route.params.category and $route.params.qty
export default {
  data: function() {
    return {
      state: '',
    };
  },

  methods: {
    getState: function() {
      var app = this;
      fetch(`http://172.22.0.2:3000/devices/edit/60ad139e2e00712fc4d60be7`)
        .then((response) => response.json())
        .then((data) => (app.state = data.state))
        .catch(function(error) {
          console.log(error.message);
        });
    },
    setState: function() {
      const body = {
        id: '60ad139e2e00712fc4d60be7',
        State: !this.state,
      };
      axios
        .post('http://172.22.0.2:3000/devices/edit', body)
        .then((response) => console.log(response))
        .catch((error) => {
          console.error('There was an error!', error);
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
