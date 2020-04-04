var app = new Vue({
    el: '#app',
    data: {
        note: '',
        notes: []
    },
    methods: {
        addNote: function(){
            this.notes.push(this.note)
            this.note = ''
        }
    }
})