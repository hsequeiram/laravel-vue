<template>
    <navigation></navigation>
   <br/>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12" id="app">
                <div class="card">
                    <div class="card-body">
                        <nav>
                            <div
                                class="nav nav-tabs"
                                id="nav-tab"
                                role="tablist"
                            >
                                <button
                                    class="nav-link active"
                                    id="nav-Determinante-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-Determinante"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-Determinante"
                                    aria-selected="true"
                                >
                                    Determinante
                                </button>
                                <button
                                    class="nav-link"
                                    id="nav-Regla-de-cramer-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-Regla-de-cramer"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-Regla-de-cramer"
                                    aria-selected="false"
                                >
                                    Regla de cramer
                                </button>
                                <button
                                    class="nav-link"
                                    id="nav-Inversa-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-Inversa"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-Inversa"
                                    aria-selected="false"
                                >
                                    Inversa
                                </button>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div
                                class="tab-pane fade show active"
                                id="nav-Determinante"
                                role="tabpanel"
                                aria-labelledby="nav-Determinante-tab"
                            >
                                <div class="card-body">
                                    <div class="d-flex align-items-start">
                                        <div
                                            class="nav flex-column nav-pills me-3"
                                            id="v-pills-tab"
                                            role="tablist"
                                            aria-orientation="vertical"
                                        >
                                            <button
                                                class="nav-link active"
                                                id="v-pills-home-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#v-pills-home"
                                                type="button"
                                                role="tab"
                                                aria-controls="v-pills-home"
                                                aria-selected="true"
                                            >
                                                2x2
                                            </button>
                                            <button
                                                class="nav-link"
                                                id="v-pills-profile-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#v-pills-profile"
                                                type="button"
                                                role="tab"
                                                aria-controls="v-pills-profile"
                                                aria-selected="false"
                                            >
                                                3x3
                                            </button>
                                            <button
                                                class="nav-link"
                                                id="v-pills-messages-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#v-pills-messages"
                                                type="button"
                                                role="tab"
                                                aria-controls="v-pills-messages"
                                                aria-selected="false"
                                            >
                                                4x4
                                            </button>
                                            <button
                                                class="nav-link"
                                                id="v-pills-settings-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#v-pills-settings"
                                                type="button"
                                                role="tab"
                                                aria-controls="v-pills-settings"
                                                aria-selected="false"
                                            >
                                                Settings
                                            </button>
                                        </div>
                                        <div
                                            class="tab-content"
                                            id="v-pills-tabContent"
                                        >
                                            <div
                                                class="tab-pane fade show active"
                                                id="v-pills-home"
                                                role="tabpanel"
                                                aria-labelledby="v-pills-home-tab"
                                            >
                                                <div class="container" style="border: solid;">
                                                    <div class="container-md">
                                                        <div>
                                                        <input type="text" placeholder="escriba aqui"/>
                                                        <input type="text" placeholder="escriba aqui"/>
                                                        </div>
                                                        <div>
                                                        <input type="text" placeholder="escriba aqui"/>
                                                        <input type="text" placeholder="escriba aqui"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="tab-pane fade"
                                                id="v-pills-profile"
                                                role="tabpanel"
                                                aria-labelledby="v-pills-profile-tab"
                                            >
                                                ...
                                            </div>
                                            <div
                                                class="tab-pane fade"
                                                id="v-pills-messages"
                                                role="tabpanel"
                                                aria-labelledby="v-pills-messages-tab"
                                            >
                                                ...
                                            </div>
                                            <div
                                                class="tab-pane fade"
                                                id="v-pills-settings"
                                                role="tabpanel"
                                                aria-labelledby="v-pills-settings-tab"
                                            >
                                                ...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="nav-Regla-de-cramer"
                                role="tabpanel"
                                aria-labelledby="nav-Regla-de-cramer"
                            >
                                <div class="card-body">
                                    <h1>Regla</h1>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="nav-Inversa"
                                role="tabpanel"
                                aria-labelledby="nav-Inversa-tab"
                            >
                                <div class="card-body">
                                    <h1>Inversa</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
</template>

<script>
import { reactive } from "vue";
import navigation from "./BlogsNav.vue";
export default {
    components: {
        navigation,
    },
};
</script>
