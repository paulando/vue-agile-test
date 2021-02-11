<template>
    <Layout>
            <section class="my-5">
                <div style="text-align:center;">
                    <p class="is-size-1 has-text-weight-bold has-text-third">404</p>
                    <h1 class="is-size-2 has-text-weight-bold my-2">We're sorry!</h1>
                    <p>The page you are looking for appears to have been moved, deleted or does not exist.</p>
                    <p>
                        Don't worry – this is not a dead end. Head straight to our <g-link to="/">home page</g-link> or go back to <a href="#" @click="$router.go(-1)">previous page</a>.
                    </p>
                </div>
            </section>
    </Layout>
</template>