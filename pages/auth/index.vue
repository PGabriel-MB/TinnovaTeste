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
            >
            <button type="button" class="
                bg-green-500 rounded-lg p-3 text-white font-semibold
            ">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AuthPage',
    methods: {
        
    }
}
</script>
