import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8100/api/'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pasien: localStorage.getItem("pasien") ? JSON.parse(localStorage.getItem("pasien")) : [],
        antrian: localStorage.getItem("antrian") ? JSON.parse(localStorage.getItem("antrian")) : [],
        pegawai: localStorage.getItem("pegawai") ? JSON.parse(localStorage.getItem("pegawai")) : [],
        poli: localStorage.getItem("poli") ? JSON.parse(localStorage.getItem("poli")) : [],
        obat: localStorage.getItem("obat") ? JSON.parse(localStorage.getItem("obat")) : [],
        ruang_ranap: localStorage.getItem("ruang_ranap") ? JSON.parse(localStorage.getItem("ruang_ranap")) : [],
    },
    mutations: {
        // getData(state) {
        //     state.pasien = JSON.parse(localStorage.getItem("pasien"))
        //     state.antrian = JSON.parse(localStorage.getItem("antrian"))
        //     state.dokter = JSON.parse(localStorage.getItem("dokter"))
        //     state.pegawai = JSON.parse(localStorage.getItem("pegawai"))
        //     state.perawat = JSON.parse(localStorage.getItem("perawat"))
        //     state.poli = JSON.parse(localStorage.getItem("poli"))
        //     state.ruang_ranap = JSON.parse(localStorage.getItem("ruang_ranap"))
        // },
        async addData(state, {
            input,
            select
        }) {
            switch (select) {
                case "pasien":
                    state.pasien.push(input)
                    await localStorage.setItem('pasien', JSON.stringify(state.pasien))
                    break
                case "antrian":
                    state.antrian.push(input)
                    await localStorage.setItem('antrian', JSON.stringify(state.antrian))
                    break
                case "dokter":
                    state.dokter.push(input)
                    await localStorage.setItem('dokter', JSON.stringify(state.dokter))
                    break
                case "pegawai":
                    state.pegawai.push(input)
                    await localStorage.setItem('pegawai', JSON.stringify(state.pegawai))
                    break
                case "obat":
                    state.obat.push(input)
                    await localStorage.setItem('obat', JSON.stringify(state.obat))
                    break
            }

        },
        async removeData(state, input) {
            state.pasien.splice(state.pasien.indexOf(input), 1)
            await localStorage.setItem('pasien', JSON.stringify(state.antrian))
        }
    },
    actions: {
        index({
            commit
        }, {
            select,
            input
        }) {
            commit('getData', {
                select: select,
                input: input
            })
        },
        store({
            commit
        }, {
            select,
            input
        }) {
            commit('addData', {
                select: select,
                input: input
            })
        },
        updated() {

        },
        delete() {

        },
        syncAPI() {
            axios.post('', localStorage.getItem(''))
        }
    },
    getters: {
        pasien: state => {
            return state.pasien
        },
        antrian: state => {
            return state.antrian
        },
        pegawai: state => {
            return state.pegawai
        },
        dokter: state => {
            return state.pegawai
        },
        obat: state => {
            return state.obat
        }
    }
})