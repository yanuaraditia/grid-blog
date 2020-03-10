<template>
    <Layout :show-logo="false">
        <section class="text-center">
            <div class="container-md">
                <div class="author_info text-center">
                    <figure>
                        <g-image src="~/assets/images/sadness.jpg" width="220" height="220" blur="10" alt="Me" class="author_image_mask"/>
                        <div class="canvas">
                            <g-image src="~/assets/images/sadness.jpg" width="220" height="220"  alt="Me" class="author_image"/>
                        </div>
                    </figure>
                    <div class="info_section">
                        <h1>404 Not Found</h1>
                        <h6 class="mb-3 mb-lg-4">Uups....</h6>
                        <div class="link">
                            <g-link class="btn btn-primary" to="/">Back Home</g-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>