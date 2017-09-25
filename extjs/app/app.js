Ext.application({
    name: 'MyApp',
    launch: function() {
        var viewport = Ext.create('Ext.container.Viewport', {
            items:[{
                xtype: 'tabpanel',
                items: [{
                    title: 'Employee Directory',
                    xtype: 'grid',
                    iconCls: 'x-fa fa-users',
                    listeners: {
                        itemclick: function() {
                            var form = Ext.create('Ext.form.Panel', {
                                title: 'Update Record',
                                floating: true,
                                modal: true,
                                centered: true,
                                width: 300,
                                items: [{
                                    xtype: 'textfield',
                                    name: 'firstname',
                                    label: 'First Name'
                                },{        
                                    xtype: 'toolbar',
                                    docked: 'bottom',
                                    items: ['->', {
                                        xtype: 'button',
                                        text: 'Submit',
                                        iconCls: 'x-fa fa-check',
                                        handler: function() {
                                            form.destroy();
                                        }
                                    }, {
                                        xtype: 'button',
                                        text: 'Cancel',
                                        iconCls: 'x-fa fa-close',
                                        handler: function() {
                                            form.destroy();
                                        }
                                    }]
                                }]
                            });
                            form.items.items[0].label = "Name";
                            console.log(form.items.items[0]);
                            form.show();
                        }
                    },
                    store: {
                        data: [{
                            "firstName": "Jean",
                            "lastName": "Grey",
                            "officeLocation": "Lawrence, KS",
                            "phoneNumber": "(372) 792-6728"
                        }, {
                            "firstName": "Phillip",
                            "lastName": "Fry",
                            "officeLocation": "Lawrence, KS",
                            "phoneNumber": "(318) 224-8644"
                        }, {
                            "firstName": "Peter",
                            "lastName": "Quill",
                            "officeLocation": "Redwood City, CA",
                            "phoneNumber": "(718) 480-8560"
                        }]
                    },
                    columns: [{
                        text: 'First Name',
                        dataIndex: 'firstName',
                        flex: 1
                    }, {
                        text: 'Last Name',
                        dataIndex: 'lastName',
                        flex: 1
                    }, {
                        text: 'Phone Number',
                        dataIndex: 'phoneNumber',
                        flex: 1
                    }]
                },{
                    title: 'About Sencha',
                    iconCls: 'x-fa fa-info-circle',
                }],
            }],
        });
    }
});

/*Ext.application({
    name: 'test',

    launch: function() {
        var form = Ext.create('Ext.form.Panel', {
            title: 'Update Record',
            // floating: true,
            centered: true,
            modal: true,
            width:300,
            items: [{
                xtype: 'textfield',
                name: 'firstname',
                label: 'First Name'
            }, {
                xtype: 'toolbar',
                docked: 'bottom',
                items: ['->', {
                    xtype: 'button',
                    text: 'Submit',
                    iconCls: 'x-fa fa-check',
                    handler: function() {
                        form.destroy();
                    }
                }, {
                    xtype: 'button',
                    text: 'Cancel',
                    iconCls: 'x-fa fa-close',
                    handler: function() {
                        form.destroy();
                    }
                }]
            }]
        });

        Ext.create('Ext.container.Viewport', {
            items: [form]
        });
    }
});*/


/*Ext.application({
    name: "MyApp",
    launch: function() {

        Ext.define('Pet', {
            name: 'Noname',
            constructor: function(config) {
                this.name = config.name;
            },
            greeting: function() {
                return 'Hello! I\'m ' + this.name;
            }
        });

        Ext.define('Dog', {
            extend: 'Pet',
            isHomeless: false,
            constructor: function(config) {
                this.isHomeless = config.isHomeless;
                this.callParent(arguments);
            },
            bark: function() {
                return 'woof woof!'
            },
            statics: {
                staticField: 'I\'m static field',
                staticMethod: function() {
                    return 'Hello from static method!';
                }
            }
        });

        var myPet = Ext.create('Pet', {
            name: 'MyPet'
        });

        var tyzik = Ext.create('Dog', {
            name: 'Tyzik',
            isHomeless: true
        });

        Ext.define('Dog', {
            extend: 'Ext.data.Model',
            // fields: [
            //     {name: 'name', type: 'string'},
            //     {name: 'age', type: 'int'},
            //     {name: 'breed', type: 'string'},
            //     {name: 'homeless', type: 'boolean'},
            // ],

            fields: [
                {name: 'id', type: 'int'},
                {name: 'firstName', type: 'string'}
            ],

            // changeName: function(newName) {
            //     this.set('firstName', newName)
            // }
        });

        var store = Ext.create('Ext.data.Store', {
            model: 'Dog',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/dogs.json',
                reader: {
                    type: 'json',
                    rootProperty: 'dogs'
                },
            }
            // data: [
            //     {
            //         "name": "Tyzik",
            //         "age": 4,
            //         "breed": "Apso",
            //         "homeless": false
            //     },
            //     {
            //         "name": "Jack",
            //         "age": 11,
            //         "breed": "Shepherd",
            //         "homeless": false
            //     },
            //     {
            //         "name": "Dobby",
            //         "age": 3,
            //         "breed": "Doberman",
            //         "homeless": true
            //     }
            // ]
        });

        Ext.create("Ext.container.Viewport", {
            layout: "fit",
            items: [
                {
                    title: "MyTitle",
                    html: (function() {
                        var foo = {name: "foo", one: 1, two: 2};
                        var bar = {two: "two", three: "3"};

                        bar.__proto__ = foo;

                        // foo.four = 4;
                        // bar.one = 11;
                        var dogs = "";

                        console.log(store.isLoaded());

                        store.each(function(elem){
                            console.log(elem.get('id'));
                            dogs += elem.get('id') + "</br>";
                        });

                        return dogs;
                    })()
                }
            ]
        });
    }
});*/