<template>
  <div>
    <h1><nuxt-link :to="{name: 'lang'}" exact>{{ $t('links.home') }}</nuxt-link></h1>
    <h1>{{$t('user.name')}}: {{ info.name }}</h1>
    <h2>{{$t('user.gender')}}: {{ info.age }}</h2>
    <h3>{{$t('user.interest')}}: {{ info.interest }}</h3>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      name: 'Hello World!',
      info: {
        name: 'Zhang San',
        age: 18,
        interest: 'I love coding!'
      }
    }
  }
  //   asyncData() {
  //     return axios.get('http://myjson.com/pjfw6').then(res => {
  //       console.log('RES: ', res)
  //       return { info: res.data }
  //     })
  //   }
  // async asyncData() {
  //   const { data } = await axios.get('http://myjson.com/pjfw6')
  //   return { info: data }
  // }
}
</script>
