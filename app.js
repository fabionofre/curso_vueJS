var app = new Vue({
    el: "#app",
    data: {
        test: '',
        title: "Contas a receber",
        menus: [
            {id: 0, name: "Listar Contas"},
            {id: 1, name: "Criar Conta"}
        ],
        names: [
          'Conta de Luz',
          'Conta de Água',
          'Conta de telefone',
          'Supermercado',
          'Cartão de Crédito',
          'Gasolina'
        ],
        formType: 'insert',
        bill: {
            date_due: '',
            name: '',
            value: 0,
            done: false
        },
        bills: [
            {date_due: '20/08/2016', name: 'Conta de Luz', value: 70, done: 1},
            {date_due: '21/08/2016', name: 'Conta de Água', value: 55, done: 0},
            {date_due: '22/08/2016', name: 'Conta de Telefone', value: 55, done: 0},
            {date_due: '23/08/2016', name: 'Supermercado', value: 625, done: 1},
            {date_due: '24/08/2016', name: 'Cartão de Crédito', value: 1500, done: 1},
            {date_due: '25/08/2016', name: 'Empréstimo', value: 2000, done: 1},
            {date_due: '26/08/2016', name: 'Gasolina', value: 25, done:1}
        ],
        activedView: 0
    },
    computed: {
        status: function(){
            var count = 0;
            for(var i in this.bills){
                if(!this.bills[i].done)
                    count++;
            }

            return !count ? "Nenhuma conta a pagar" : "Existem "+count+" contas a pagar";

        }
    },
    methods: {
        showView: function (id) {
            this.activedView = id;
            if(id == 1){
                this.formType = 'insert';
            }
        },
        submit: function () {
            if(this.formType == 'insert')
                this.bills.push(this.bill);
            else
                this.bill = {
                    date_due: '',
                    name: '',
                    value: 0,
                    done: false
                };
            this.activedView = 0;
        },
        loadBill: function (bill) {
            this.bill = bill;
            this.activedView = 1;
            this.formType = 'update';
        },
        removeBill: function(index){
            if(confirm("Tem certeza que deseja excluir esta conta?"))
                this.bills.splice(index, 1);
        }
    },
    filters: {
        doneLabel: function (value) {
            if(value)
                return "Paga";

            return "paga";
        },
        statusBill: function (value) {
            if(value > 0)
                return "red";
            else if(value === 0)
                return "green";

            return "gray";
        }
    }
});



