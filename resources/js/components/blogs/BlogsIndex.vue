<template>
    <navigation></navigation>
    <br />
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12" id="app">
                <div class="card">
                    <div class="card-body">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="nav-Determinante-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-Determinante" type="button" role="tab"
                                    aria-controls="nav-Determinante" aria-selected="true">
                                    Determinante
                                </button>
                                <button class="nav-link" id="nav-Regla-de-cramer-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-Regla-de-cramer" type="button" role="tab"
                                    aria-controls="nav-Regla-de-cramer" aria-selected="false">
                                    Regla de cramer
                                </button>
                                <button class="nav-link" id="nav-Inversa-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-Inversa" type="button" role="tab" aria-controls="nav-Inversa"
                                    aria-selected="false">
                                    Inversa
                                </button>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-Determinante" role="tabpanel"
                                aria-labelledby="nav-Determinante-tab">
                                <div class="card-body">
                                    <div class="d-flex align-items-start">
                                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                                            aria-orientation="vertical">
                                            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                                data-bs-target="#v-pills-home" type="button" role="tab"
                                                aria-controls="v-pills-home" aria-selected="true">
                                                2x2
                                            </button>
                                            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                                data-bs-target="#v-pills-profile" type="button" role="tab"
                                                aria-controls="v-pills-profile" aria-selected="false">
                                                3x3
                                            </button>
                                            <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                                data-bs-target="#v-pills-messages" type="button" role="tab"
                                                aria-controls="v-pills-messages" aria-selected="false">
                                                4x4
                                            </button>
                                            <!-- <button
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
                                            </button> -->
                                        </div>
                                        <div class="tab-content" id="v-pills-tabContent">
                                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                                aria-labelledby="v-pills-home-tab">
                                                <div class="container" style="border: solid;">
                                                    <div class="container-md">
                                                        
                                                        <div class="justify-content-center">
                                                            <input v-model="matriz2x2[0][0]" type="number" placeholder="(1,1)" ove style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz2x2[0][1]" type="number" placeholder="(1,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <div>
                                                            <input v-model="matriz2x2[1][0]" type="number" placeholder="(2,1)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz2x2[1][1]" type="number" placeholder="(2,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <br/>
                                                        <!-- <div>
                                                           
                                                            <textarea name="" id="" cols="30" rows="10">{{ this.Resultado }}</textarea>
                                                        </div> -->
                                                        <div>
                                                           <p v-for="(item, index) in Pasos2" :key="index">
                                                                Paso {{ index+1 }}:<br/>
                                                                {{ item }}<br/>
                                                           </p>
                                                           
                                                           
                                                       </div>
                                                        <div>
                                                            <button type="button" name="calcular" @click="Calcular(1)">CALCULAR</button>
                                                        </div>
                                                        <div>
                                                            <button type="button" name="cls" @click="Borrar(1)">BORRAR</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                                aria-labelledby="v-pills-profile-tab">
                                                <div class="container" style="border: solid;">
                                                    <div class="container-md">
                                                        
                                                        <div class="justify-content-center">
                                                            <input v-model="matriz3x3[0][0]" type="number" placeholder="(1,1)" ove style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[0][1]" type="number" placeholder="(1,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[0][2]" type="number" placeholder="(1,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <div>
                                                            <input v-model="matriz3x3[1][0]" type="number" placeholder="(2,1)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[1][1]" type="number" placeholder="(2,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[1][2]" type="number" placeholder="(2,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <div>
                                                            <input v-model="matriz3x3[2][0]" type="number" placeholder="(3,1)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[2][1]" type="number" placeholder="(3,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[2][2]" type="number" placeholder="(3,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <br/>
                                                        <!-- <div>
                                                           
                                                            <textarea name="" id="" cols="30" rows="10">{{ this.Resultado }}</textarea>
                                                        </div> -->
                                                        <div>
                                                           <p v-for="(item, index) in Pasos3" :key="index">
                                                                Paso {{ index+1 }}:<br/>
                                                                {{ item }}<br/>
                                                           </p>
                                                           
                                                           
                                                       </div>
                                                        <div>
                                                            <button type="button" name="calcular" @click="Calcular(2)">CALCULAR</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                                aria-labelledby="v-pills-messages-tab">
                                                ...
                                                <div class="container" style="border: solid;">
                                                    <div class="container-md">
                                                        
                                                        <div class="justify-content-center">
                                                            <input v-model="matriz4x4[0][0]" type="number" placeholder="(1,1)" ove style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz4x4[0][1]" type="number" placeholder="(1,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz4x4[0][2]" type="number" placeholder="(1,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz4x4[0][3]" type="number" placeholder="(1,4)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <div>
                                                            <input v-model="matriz4x4[1][0]" type="number" placeholder="(2,1)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz4x4[1][1]" type="number" placeholder="(2,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz4x4[1][2]" type="number" placeholder="(2,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz4x4[1][3]" type="number" placeholder="(2,4)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <div>
                                                            <input v-model="matriz4x4[2][0]" type="number" placeholder="(3,1)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz4x4[2][1]" type="number" placeholder="(3,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz4x4[2][2]" type="number" placeholder="(3,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz4x4[2][3]" type="number" placeholder="(3,4)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <div>
                                                            <input v-model="matriz4x4[3][0]" type="number" placeholder="(3,1)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz4x4[3][1]" type="number" placeholder="(3,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz4x4[3][2]" type="number" placeholder="(3,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz4x4[3][3]" type="number" placeholder="(3,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <br/>
                                                        <!-- <div>
                                                           
                                                            <textarea name="" id="" cols="30" rows="10">{{ this.Resultado }}</textarea>
                                                        </div> -->
                                                        <div>
                                                           <p v-for="(item, index) in Pasos4" :key="index">
                                                                Paso {{ index+1 }}:<br/>
                                                               
                                                                <p v-if="Array.isArray(item)" v-for="(element, inde) in item" :key="inde">
                                                                {{ element }}<br/>
                                                                
                                                            </p>
                                                            <P v-else>
                                                                   {{ item }}<br/> 
                                                                </P>
                                                           </p>
                                                           
                                                           
                                                       </div>
                                                        <div>
                                                            <button type="button" name="calcular" @click="Calcular(3)">CALCULAR</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div
                                                class="tab-pane fade"
                                                id="v-pills-settings"
                                                role="tabpanel"
                                                aria-labelledby="v-pills-settings-tab"
                                            >
                                                ...
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-Regla-de-cramer" role="tabpanel"
                                aria-labelledby="nav-Regla-de-cramer">
                                <div class="card-body">
                                    <div class="container" style="border: solid;">
                                                    <div class="container-md">
                                                        <select
                                                            v-model="Incognita"
                                                        >
                                                            <option value="0">--Seleccione el numero de incognitas--</option>
                                                            <option value="2">2 incognitas</option>
                                                            <option value="3">3 incognitas</option>

                                                        </select>
                                                        <div v-if="Incognita == '2'">
                                                        <div class="justify-content-center">
                                                            <input v-model="sistecu2[0][0]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="x" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu2[0][1]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="y" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="=" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu2[0][2]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <div>
                                                            <input v-model="sistecu2[1][0]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="x" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu2[1][1]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="y" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="=" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu2[1][2]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <!-- <div>
                                                            <input v-model="matriz3x3[2][0]" type="number" placeholder="(3,1)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[2][1]" type="number" placeholder="(3,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[2][2]" type="number" placeholder="(3,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div> -->
                                                        <br/>
                                                        <!-- <div>
                                                           
                                                            <textarea name="" id="" cols="30" rows="10">{{ this.Resultado }}</textarea>
                                                        </div> -->
                                                        <div>
                                                            <p v-for="(item, index) in Pasos5" :key="index">
                                                                Paso {{ index+1 }}:<br/>
                                                               
                                                                <p v-if="Array.isArray(item)" v-for="(element, inde) in item" :key="inde">
                                                                {{ element }}<br/>
                                                                
                                                            </p>
                                                            <P v-else>
                                                                   {{ item }}<br/> 
                                                                </P>
                                                           </p>
                                                           
                                                           
                                                       </div>
                                                        <div>
                                                            <button type="button" name="calcular" @click="Calcular(4)">CALCULAR</button>
                                                        </div>
                                                        </div>
                                                        <div v-if="Incognita == '3'">
                                                            <div class="justify-content-center">
                                                            <input v-model="sistecu3[0][0]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="x" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu3[0][1]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="y" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu3[0][2]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="z" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="=" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu3[0][3]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <div>
                                                            <input v-model="sistecu3[1][0]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="x" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu3[1][1]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="y" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu3[1][2]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="z" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="=" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu3[1][3]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <div>
                                                            <input v-model="sistecu3[2][0]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="x" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu3[2][1]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="y" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu3[2][2]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="z" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input readonly type="text" value="=" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="sistecu3[2][3]" type="number" style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <!-- <div>
                                                            <input v-model="matriz3x3[2][0]" type="number" placeholder="(3,1)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[2][1]" type="number" placeholder="(3,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[2][2]" type="number" placeholder="(3,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div> -->
                                                        <br/>
                                                        <!-- <div>
                                                           
                                                            <textarea name="" id="" cols="30" rows="10">{{ this.Resultado }}</textarea>
                                                        </div> -->
                                                        <div>
                                                            <p v-for="(item, index) in Pasos6" :key="index">
                                                                Paso {{ index+1 }}:<br/>
                                                               
                                                                <p v-if="Array.isArray(item)" v-for="(element, inde) in item" :key="inde">
                                                                {{ element }}<br/>
                                                                
                                                            </p>
                                                            <P v-else>
                                                                   {{ item }}<br/> 
                                                                </P>
                                                           </p>
                                                           
                                                           
                                                       </div>
                                                        <div>
                                                            <button type="button" name="calcular" @click="Calcular(5)">CALCULAR</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                    <h1>Regla</h1>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-Inversa" role="tabpanel" aria-labelledby="nav-Inversa-tab">
                                <div class="card-body">
                                    <div class="container" style="border: solid;">
                                        <div class="container-md">
                                            <select
                                                v-model="Tipomatriz"
                                            >
                                                <option value="0">--Seleccione el tipo de matriz--</option>
                                                <option value="2">2x2</option>
                                                <option value="3">3x3</option>

                                            </select>
                                            <div v-if="Tipomatriz == '2'">
                                                <div class="justify-content-center">
                                                            <input v-model="matriz2x2[0][0]" type="number" placeholder="(1,1)" ove style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz2x2[0][1]" type="number" placeholder="(1,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <div>
                                                            <input v-model="matriz2x2[1][0]" type="number" placeholder="(2,1)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz2x2[1][1]" type="number" placeholder="(2,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                           
                                                        <br/>
                                                        <!-- <div>
                                                           
                                                            <textarea name="" id="" cols="30" rows="10">{{ this.Resultado }}</textarea>
                                                        </div> -->
                                                        <div>
                                                            <p v-for="(item, index) in Pasos8" :key="index">
                                                                Paso {{ index+1 }}:<br/>
                                                               
                                                                <p v-if="Array.isArray(item)" v-for="(element, inde) in item" :key="inde">
                                                                {{ element }}<br/>
                                                                
                                                            </p>
                                                            <P v-else>
                                                                   {{ item }}<br/> 
                                                                </P>
                                                           </p>
                                                           
                                                           
                                                       </div>
                                                        <div>
                                                            <button type="button" name="calcular" @click="Calcular(7)">CALCULAR</button>
                                                        </div>
                                            </div>
                                            <div v-if="Tipomatriz == '3'">
                                                <div class="justify-content-center">
                                                            <input v-model="matriz3x3[0][0]" type="number" placeholder="(1,1)" ove style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[0][1]" type="number" placeholder="(1,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[0][2]" type="number" placeholder="(1,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <div>
                                                            <input v-model="matriz3x3[1][0]" type="number" placeholder="(2,1)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[1][1]" type="number" placeholder="(2,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[1][2]" type="number" placeholder="(2,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <div>
                                                            <input v-model="matriz3x3[2][0]" type="number" placeholder="(3,1)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[2][1]" type="number" placeholder="(3,2)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                            <input v-model="matriz3x3[2][2]" type="number" placeholder="(3,3)"  style="max-width: 6.33333ch; min-width: 6.33333ch;"/>
                                                        </div>
                                                        <br/>
                                                        <div>
                                                            <p v-for="(item, index) in Pasos9" :key="index">
                                                                Paso {{ index+1 }}:<br/>
                                                               
                                                                <p v-if="Array.isArray(item)" v-for="(element, inde) in item" :key="inde">
                                                                {{ element }}<br/>
                                                                
                                                            </p>
                                                            <P v-else>
                                                                   {{ item }}<br/> 
                                                                </P>
                                                           </p>
                                                           
                                                           
                                                       </div>
                                                        <div>
                                                            <button type="button" name="calcular" @click="Calcular(8)">CALCULAR</button>
                                                        </div>
                                            </div>
                                        </div>
                                    </div>
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
import math from '../../calculos/Determinantes.js';
import navigation from "./BlogsNav.vue";
export default {
    components: {
        navigation,
    },
    data() {
        return{
            Incognita:'0',
            Tipomatriz:'0',
            Pasos2:[],
            Pasos3:[],
            Pasos4:[],
            Pasos5:[],
            Pasos6:[],
            Pasos8:[],
            Pasos9:[],
            Resultado: "",
            matriz2x2: [
                        [null, null],
                        [null, null]
                        ],
            matriz3x3: [
                        [null, null,null],
                        [null, null,null],
                        [null, null,null]
                        ],
            matriz4x4: [
                        [null, null,null,null],
                        [null, null,null,null],
                        [null, null,null,null],
                        [null, null,null,null]
                        ],
            sistecu2: [
                        [null, null,null],
                        [null, null,null]
                        ],
            sistecu3: [
                        [null, null,null,null],
                        [null, null,null,null],
                        [null, null,null,null]
                        ],
        }
        
    },
    methods: {
        Calcular(a){
            switch(a){
                case 1:
                //this.Resultado = math.Det2x2(this.matriz2x2)
                this.Pasos2 = math.Pasos2x2(this.matriz2x2)
                break
                case 2:
                this.Pasos3 = math.Pasos3x3(this.matriz3x3)
                //this.Resultado = math.Det3x3(this.matriz3x3)
                break
                case 3:
                this.Pasos4 = math.Pasos4x4(this.matriz4x4)
                //this.Resultado = math.Det4x4(this.matriz4x4)
                break
                case 4:
                this.Pasos5 = math.PasosSistEcu2(this.sistecu2)
                //this.Resultado = math.Det4x4(this.matriz4x4)
                break
                case 5:
                this.Pasos6 = math.PasosSistEcu3(this.sistecu3)
                //this.Resultado = math.Det4x4(this.matriz4x4)
                break
                case 7:
                this.Pasos8 = math.PasosInv2x2(this.matriz2x2)
                //this.Resultado = math.Det4x4(this.matriz4x4)
                break
            }
            //this.Resultado = math.Det3x3(this.Data)
        }
        // calcular(){
        //     let resul = (this.Data1*this.Data4) - (this.Data2*this.Data3)
        //     let Paso1 = "Paso 1:\n("+this.Data1.toString()+"*"+this.Data4.toString()+")-"+"("+this.Data2.toString()+"*"+this.Data3.toString()+")\n"
        //     let Paso2 = "Paso 2:\n("+(this.Data1*this.Data4).toString()+")-"+"("+(this.Data2*this.Data3).toString()+")\n"

        //     this.Resultado =Paso1+Paso2+ "el determinante de la matriz es:"+ resul.toString()
        // }
    },
};
</script>
<style scoped >

</style>