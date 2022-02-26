<template>
    <div class="
        flex justify-center items-center h-screen
        bg-gradient-to-r from-green-500 to-green-900
    ">
        <form action="" class="
            flex flex-col
            bg-white my-10 p-12 rounded-xl shadow-2xl
        ">
            <h1 class="text-center font-semibold text-green-500 mb-10 text-6xl">
                Carter
                <span>
                    <font-awesome-icon :icon="['fa', 'car']" />
                </span>
            </h1>
            <input
                class="
                    border-2 border-green-500 rounded-lg p-3 mb-3
                    focus:outline-none text-green-500 font-semibold placeholder:text-green-300
                "
                type="text"
                name="email"
                id="email"
                placeholder="E-mail"
                v-model="email"
            >
            <input
                class="
                    border-2 border-green-500 rounded-lg p-3 mb-8
                    focus:outline-none text-green-500 font-semibold placeholder:text-green-300
                "
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                v-model="password"
            >
            <Transition name="bounce">
                <div class="alertArea" v-if="hasAlert">
                    {{ alertMessage }}
                </div>
            </Transition>
            <button type="button" class="
                bg-green-500 rounded-lg p-3 text-white font-semibold
            "
            @click="handleLogin"
            >Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AuthPage',
    data: () => ({
        email: '',
        password: '',
        alertMessage: '',
        hasAlert: false
    }),
    methods: {
        async handleLogin() {
            const req = await this.$axios.$post('/auth/login');

            req.then(resp => {
                console.log('DATA', resp.data)
                this.$store.commit('auth/setAuthentication', resp.data)
            })
            .catch(err => {
                console.log('Deu Ruim: ', err);

                this.hasAlert = true;
                this.alertMessage = "Verifique os se os dados enviados estão corretos!";
            })
        }
    }
}
</script>

<style scoped>
.alertArea{
    flex: 1;
    justify-content: center;
    align-content: center;
    color: red;
    background-color: rgb(216, 170, 170);
    font-weight: bolder;
    font-size: 1.5rem;
    border-radius: 8px;
    border: 2px solid red;

}
</style>