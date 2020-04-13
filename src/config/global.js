import Model from '@/components/Model.vue'
import Mode from "@/components/Mode.vue";
import Button from "@/components/CommonButton.vue";
import ImgShower from "@/components/ImgShower.vue";
import Card from "@/components/Card.vue";
import CardImg from "@/components/CardImg.vue";
export default(Vue)=>{
    Vue.component('Model',Model);
    Vue.component('Mode',Mode);
    Vue.component('CommonButton',Button);
    Vue.component('ImgShower',ImgShower);
    Vue.component('Card',Card);
    Vue.component('CardImg',CardImg);
}