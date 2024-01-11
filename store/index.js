export const state = () => ({
  apiData: null,
  globalData: null,
  homeData: null,
  komisi: null,
  peraturan: null,
  pertanyaanAndJawaban: null
})
export const mutations = {
  SET_API_DATA (state, payload) {
    state.apiData = payload
  },
  SET_GLOBAL_DATA (state, payload) {
    state.globalData = payload
  },
  SET_HOME_DATA (state, payload) {
    state.homeData = payload
  },
  SET_KOMISI_DATA (state, payload) {
    state.komisi = payload
  },
  SET_PERATURAN_DATA (state, payload) {
    state.peraturan = payload
  },
  SET_PERTANYAANANDJAWABAN_DATA (state, payload) {
    state.pertanyaanAndJawaban = payload
  }
}
export const actions = {
  async getApi ({ dispatch }) {
    await this.$axios
      .$get('https://super7tech.com/developer_exam/api')
      .then((response) => {
        dispatch('getGlobal', response)
        dispatch('getHome', response)
        dispatch('getKomisi', response)
        dispatch('getPeraturan', response)
        dispatch('getPertanyaanAndJawaban', response)
      })
      .catch(() => {
      })
  },
  async getGlobal ({ commit }, data) {
    await this.$axios
      .$get(data.routes.global)
      .then((response) => {
        commit('SET_GLOBAL_DATA', response)
      })
      .catch(() => {
      })
  },
  async getHome ({ commit }, data) {
    await this.$axios
      .$get(data.routes.homePage)
      .then((response) => {
        commit('SET_HOME_DATA', response)
      })
      .catch(() => {
      })
  },
  async getKomisi ({ commit }, data) {
    await this.$axios
      .$get(data.routes.komisi)
      .then((response) => {
        commit('SET_KOMISI_DATA', response)
      })
      .catch(() => {
      })
  },
  async getPeraturan ({ commit }, data) {
    await this.$axios
      .$get(data.routes.peraturan)
      .then((response) => {
        commit('SET_PERATURAN_DATA', response)
      })
      .catch(() => {
      })
  },
  async getPertanyaanAndJawaban ({ commit }, data) {
    await this.$axios
      .$get(data.routes.pertanyaanAndJawaban)
      .then((response) => {
        commit('SET_PERTANYAANANDJAWABAN_DATA', response)
      })
      .catch(() => {
      })
  }
}
