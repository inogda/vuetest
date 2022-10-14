import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";
import router from "@/router/router";

let indexM = 0;
export default createStore({

    state: {
        step: 0,
        tipField: 0,

        likes: 2,
        isAuth: false,

        inputField: '',
        inputZIP: '',
        inputCity: '',
        inputPrice: '',
        inputrror: false,

        // Массив с заголовками
        rubric: [
            { id:  0, level:  0, field: "", tip: 0, nameB: "Next0",  select: false, title: "Was mochten Sie finanyzieren?" },
            { id:  1, level:  1, field: "", tip: 1, nameB: "Next1",  select: true, title: "In welcher Stadt befindet sich die Immobillie?" },
            { id:  2, level:  2, field: "", tip: 0, nameB: "Next2",  select: false, title: "Besitzen Sie das Grundstuck bereits" },
            { id:  3, level:  3, field: "", tip: 2, nameB: "Next3",  select: true, title: "Wie hoch ist der Kaufpreis?" },
            { id:  4, level:  4, field: "", tip: 2, nameB: "Next4",  select: true, title: "Wie viel ist das Grundstuck wert?" },
            { id:  5, level:  5, field: "", tip: 2, nameB: "Next5",  select: true, title: "Wie hoch ist der Kaufpreis des Grundstuck?" },
            { id:  6, level:  6, field: "", tip: 2, nameB: "Next6",  select: true, title: "Wie hoch ist der geschatzten Baukosten?" },
            { id:  7, level:  7, field: "", tip: 2, nameB: "Next7",  select: true, title: "Wie viel Eigenkapital mochten Sie fur die Finanzierung einsetzen?" },
            { id:  8, level:  8, field: "", tip: 0, nameB: "Next8",  select: false, title: "Fallt beim Kauf eine Maklergebuhr an?" },
            { id:  9, level:  9, field: "", tip: 3, nameB: "Next9",  select: false, title: "Wie Hoch sind die Maklergebuhren?" },
            { id: 10, level: 10, field: "", tip: 0, nameB: "Next10", select: true, title: "Mochten Sie alleine oder mit einer weiteren Person finanzieren?" },
            { id: 11, level: 11, field: "", tip: 3, nameB: "Next11", select: false, title: "In welchem Arbeitsverhaltnis sind Sie beschaftigt?" },
            { id: 12, level: 12, field: "", tip: 2, nameB: "Next12", select: true, title: "Wiehoch ist das gesamte monatliche Nettoeinkommen Ihres Haushalts?" },
            { id: 13, level: 13, field: "", tip: 4, nameB: "Next13", select: false, title: "Komtaktform:" },
            { id: 14, level: 14, field: "", tip: 9, nameB: "Next14", select: false, title: "Nach Bestatigung:" },
        ],
        // Массив с пунктами меню
        points: [
            // Нулевой уровень
            { id:  0, level: 0, back: 0, next:  1, select: false, title: "Neubau und Bestandsimmobillien", icon: "/images/icon-1.svg", },
            { id:  1, level: 0, back: 0, next:  2, select: false, title: "Eigenes Bauvorhaben", icon: "/images/icon-2.svg",},
            // Первый уровень верх
            { id:  2, level: 1, back: 0, next:  3, select: true,  title: "PLZ & Stadt", icon: "/images/icon-2.svg",},
            // Первый уровень низ
            { id:  3, level: 2, back: 0, next:  4, select: false, title: "Ja", icon: "",},
            { id:  4, level: 2, back: 0, next:  5, select: false, title: "Nein",  icon: "",},
            // Второй уровень верх
            { id:  5, level: 3, back: 1, next:  7, select: true, title: "Kaufpreis", icon: "/images/icon-2.svg",},
            // Второй уровень низ
            { id:  6, level: 4, back: 2, next:  6, select: true, title: "Wert", icon: "/images/icon-2.svg",},
            { id:  7, level: 5, back: 2, next:  6, select: true, title: "Wert", icon: "/images/icon-2.svg",},
            // Третий уровень верх

            // Третий уровень низ
            { id:  8, level: 6, back: 2, next:  7, select: true, title: "Baukosten?", icon: "/images/icon-2.svg",},
            // Четвертый уровень общий
            { id:  9, level: 7, back: 6, next:  8, select: true, title: "Eigenkapital?", icon: "/images/icon-2.svg",},
            // Пятый уровень общий тип 0
            { id: 10, level: 8, back: 0, next:  9, select: false, title: "Ja", icon: "",},
            { id: 11, level: 8, back: 0, next: 10, select: false, title: "Nein", icon: "",},
            // Шестой уровень верх (Да) тип 3
            { id: 12, level: 9, back: 8, next: 10, select: false, title: " 5% oder €", icon: "",},
            { id: 13, level: 9, back: 8, next: 10, select: false, title: "10% oder €", icon: "",},
            { id: 14, level: 9, back: 8, next: 10, select: false, title: "15% oder €", icon: "",},
            { id: 15, level: 9, back: 8, next: 10, select: false, title: "25% oder €", icon: "",},

            // Седьмой уровень тип 0
            { id: 16, level: 10, back: 7, next: 11, select: false, title: "Alleine", icon: "",},
            { id: 17, level: 10, back: 7, next: 11, select: false, title: "Mit einer weiteren Person", icon: "",},

            // Восьмой уровень тип 3
            { id: 18, level: 11, back: 10, next: 12, select: false, title: "select 1", icon: "",},
            { id: 19, level: 11, back: 10, next: 12, select: false, title: "select 2", icon: "",},
            { id: 20, level: 11, back: 10, next: 12, select: false, title: "select 3", icon: "",},
            { id: 21, level: 11, back: 10, next: 12, select: false, title: "select 4", icon: "",},
            { id: 22, level: 11, back: 10, next: 12, select: false, title: "select 5", icon: "",},

            // Девятый уровень тип 2
            { id: 23, level: 12, back: 11, next: 13, select: true,  title: "Nettoeinkommen", icon: "/images/icon-2.svg",},

            // Десятый уровень тип 4
            { id: 24, level: 13, back: 12, next: 14, select: true, title: "Anrede", icon: "",},
            { id: 25, level: 13, back: 12, next: 14, select: false, title: "Vorname", icon: "",},
            { id: 26, level: 13, back: 12, next: 14, select: false, title: "Nachname", icon: "",},
            { id: 27, level: 13, back: 12, next: 14, select: false, title: "E-mail", icon: "",},
            { id: 28, level: 13, back: 12, next: 14, select: false, title: "Telefonnummer", icon: "",},

            // Одинадцатый уровень тип 0
            { id: 29, level: 14, back: 13, next:  0, select: false, title: "Kundenreferenzen anzeigen", icon: "/images/icon-2.svg",},
        ],

        selectId: []
        ,
    },
    plugins: [createPersistedState()],
    //getters: { doubleLikes(state) { return state.likes * 2 } },
    mutations: {
        //incrementLikes(state) { state.likes += 1; },
        //decrementLikes(state) { state.likes -= 1; },

        setStep(state, stepid) {
            //alert(state.step + '-' + stepid)
            if(state.step>stepid) {
                // шаг назад
                if(stepid===0){
                    state.selectId = [];
                    state.selectId.push(stepid);
                }else{
                    indexM = state.selectId.indexOf(stepid)+1;
                    if(indexM!==-1){ state.selectId.splice(indexM); }
                }
            }
            else if(state.step==stepid) {
                // Шаг на месте или вперед
                if(stepid===0) {
                    state.selectId = [];
                    state.selectId.push(stepid);
                }else{
                    indexM = state.selectId.indexOf(stepid);
                    if(indexM!==-1){ state.selectId.splice(indexM); }

                    const found = state.selectId.find(element => element === stepid);
                    if(!found) { state.selectId.push(state.step); }
                }
            }else{
                // переход на страницу шага
                //router.push(`/step/${state.step}`);
            }
            //console.log(state.selectId);
            state.step = stepid;
        },

        setTip(state, tipid) { state.tipField = tipid; },

        setInputError(state, totalPage) {
            if(totalPage===0){
                //console.log('t-'+totalPage+'-'+state.inputrror)
                state.inputrror = true;
            }else{
                state.inputrror = false;
            }
        },


        setButtonStep(state) {

            // Находим тип у выбраного поля
            state.rubric.filter(p => p.level === state.step).forEach((itemR) => {

                if(itemR.tip===2 && state.rubric[ state.step ].field=='€ 0') {
                    // Установка флага ошибки
                    state.inputrror = true;
                }else if(itemR.tip===1) {
                    if(!state.inputZIP){
                        // Установка флага ошибки
                        state.inputrror=true;
                    }else{
                        if(state.inputZIP.length===5 && state.inputCity) {
                            // Убираем ошибку
                            state.inputrror=false;
                            // Делаем переход на следующий шаг
                            setNextPoint(state);
                        }
                    }
                }else{
                    // Делаем переход на следующий шаг
                    setNextPoint(state);
                }
            });
        },

        setSelectPoint(state, point) {
            //alert('111'+point.next + '-' + point.title)
            //console.log(point);
            // установка пункта меню в true - выбрано
            state.points.filter(p => p.level === state.step).forEach((item) => {
                if ( item.id===point.id) {
                    item.select=true;
                }else{
                    item.select=false
                }
            })
            // Включение Кнопки Button в true
            state.rubric[state.step].select = true;
            // Записали выбраный пункт меню в поле field массива rubric
            if(state.rubric[state.step].tip===0) {
                state.rubric[state.step].field = point.title;
            }
            // Установка следующего шага
            state.step = point.next;
            // переход на страницу шага
            router.push(`/step/${point.next}`);
            //console.log(newPoints)
        },

        setSelectPoint1(state, title) {
            //console.log(title);

            // Находим в базе rubric текущий шаг и Сохраняем результат в поле field
            state.rubric.filter(p => p.level === state.step).forEach((item) => {
                // Если тип у выбраного поля === 1
                if(item.tip===1 || item.tip===2) {
                    item.field = title;
                } else {
                    if (item.tip===4) {
                        item.field = title;
                    }
                    // Делаем переход на следующий шаг
                    setNextPoint(state);
                }
            });
        },
        // обрабатываем выбраный Select
        setSelectField(state, sortType) {
            // установка пункта меню в true - выбрано
            state.points.filter(p => p.level === state.step).forEach((item) => {
                if ( item.title===sortType) {
                    item.select=true;
                }else{
                    item.select=false
                }
            })
            state.rubric[state.step].field = sortType;
            // Включение Кнопки Button в true
            state.rubric[state.step].select = true;
            // Делаем переход на следующий шаг
            setNextPoint(state);
        },

    },
    actions: {

    },
    modules: {
        //post: postModule
    },
    watch: {

    }
})

// Делаем переход на следующий шаг
const setNextPoint = (state) => {
    // Находим в базе points текущий шаг
    state.points.filter(p => p.level === state.step && p.select===true).forEach((item) => {
        // Установка следующего шага
        state.step = item.next;
        // переход на страницу шага
        router.push(`/step/${item.next}`);
    })
}
