<template>
  <Layout :show-logo="true">
    <section class="my-resume mb-5">
        <div class="container-md">
            <h1>Contact Me</h1>
            <div class="form-group">
                <label for="inputName">Name</label>
                <input type="text" id="inputName" class="form-control" v-model="name">
            </div>
            <div class="form-group">
                <label for="inputEmail">E-mail</label>
                <input type="email" class="form-control" id="inputEmail" v-model="email">
            </div>
            <div class="form-group">
                <label for="inputMsg">Message</label>
                <textarea id="inputMsg" class="form-control" cols="30" rows="5" v-model="msg"></textarea>
            </div>
            <button type="submit" @click="submitData()" class="btn btn-primary">Send Me</button>
        </div>
    </section>
  </Layout>
</template>
<script>
import { initializeApp } from 'firebase'
const app = initializeApp({
    apiKey: "AIzaSyBwxohDhTfAKd5Rs8IaLk4Pv0mqPd27qgg",
    authDomain: "yanuar-contact.firebaseapp.com",
    databaseURL: "https://yanuar-contact.firebaseio.com",
    projectId: "yanuar-contact",
    storageBucket: "yanuar-contact.appspot.com",
    messagingSenderId: "113531997401",
    appId: "1:113531997401:web:c05a4e13fa4906b62e82c8",
    measurementId: "G-764CWBSP4V"
});
export const db = app.database()
export const contactsRef = db.ref('contact_me')
const date = new Date()
export default {
    data() {
        return {
            errors: [],
            name: null,
            email: null,
            msg: null,
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
        }
    },
    metaInfo: {
        title: 'Contact Me'
    },
    methods: {
        sendMessage() {
            var box = confirm('Are you sure to send this message to yanuaraditia.com??')
            if(box==true) {
                contactsRef.push({
                    name: this.name,
                    email: this.email,
                    msg: this.msg,
                    date: date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()
                });
                window.alert("Done, i'll contact you immediately");
                window.location.href = '/contact'
            }
            else {
                window.alert("No problem maybe next time");
                window.location.href = '/contact'
            }
        },
        submitData() {
            if(this.name == "" || this.name == null) {
                window.alert('Please type your name');
            }
            else if(this.msg == "" || this.msg == null) {
                window.alert('Please type a message');
            }
            else if(this.email == "" || this.email == null || !this.reg.test(this.email)) {
                window.alert('Please provide a valid email');
            }
            else {
                this.sendMessage();
            }
        }
    }
}
</script>
<style lang="scss">
.form-control {
    border:1px solid var(--border-color);
    background: transparent;
    color: var(--border-color);
    &:focus {
        background: transparent!important;
        box-shadow: 0 0 0 2px var(--link-color);
        border-color: var(--link-color);
        color: var(--link-color);
    }
    &.has-error {
        border-color: #f00;
        box-shadow: 0 0 0 2px #f00;
        color: #f00;
    }
}
</style>