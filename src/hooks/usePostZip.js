import axios from "axios";
import {ref, } from 'vue';
import {computed} from "@vue/reactivity";

export function usePosts() {

    // eslint-disable-next-line no-unused-vars
    let data = []; let includ = []; let cikl = 0;


    const posts = ref([])
    const noRender = ref(true)
    const totalPages = ref(-5)
    const isPostsLoading = ref(true)
    const isModalZipView = ref(false)

    const fetching = computed( async () => {
        try {
            //alert('yyyy-'+totalPages.value);
            if(totalPages.value) {

                const response = await axios.get('http://localhost:8080/api/german_zipcodes', {
                    params: {
                        q: totalPages.value,
                    },

                    mode: 'no-cors',
                    headers: {
                        'Accept': 'application/json',
                        'WithCredentials': true,
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json; charset=UTF-8',
                        'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                        'Authorization': ''
                    },
                    withCredentials: true,
                    credentials: 'same-origin',

                });

                totalPages.value = response.data.data.length;
                //alert(totalPages.value);

                //console.log(totalPages.value);

                data = response.data.data;
                includ = response.data.included;

                cikl = 0;
                const usersByLikes = data.map(item => {
                    const container = {};

                    container.id = cikl; cikl += 1;
                    container.zip = item.attributes.zip;
                    container.german_city_id = item.attributes.german_city_id;

                    //container.name = '';
                    includ.filter(p => p.attributes.id === item.attributes.german_city_id ).forEach((items) => {
                        //alert(items.attributes.name);
                        container.name = items.attributes.name;
                    });
                    return container;
                })
                //console.log(usersByLikes);
                posts.value = usersByLikes;
            }else{
                posts.value = [];
                totalPages.value = -1;
                isModalZipView.value = false;
            }
        } catch (e) {
            alert('Fehler, Internet prüfen')
        } finally {
            isPostsLoading.value = false;
        }
    })

    // 👇 function to get index
    // Функция для обновления массива с городами
    function getPokemonId(stroka) {

        if(totalPages.value===-2) {
            totalPages.value = -5;
            isModalZipView.value = false;
            //alert(totalPages.value);
        }else{
            totalPages.value = stroka
            isPostsLoading.value = true;
            isModalZipView.value = true;
            this.fetching;
        }

    }
    //onMounted(fetching)

    return {
        posts, isPostsLoading, isModalZipView, totalPages, fetching, noRender, getPokemonId
    }
}