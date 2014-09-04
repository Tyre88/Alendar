var Company = function(data)
{
    if(data)
    {
        this.initialize(data);
    }
};

Company.prototype = 
{
    id: 0,
    name: "",
    street: "",
    city: "",
    zip: "",
    initialize: function(data)
    {
        this.id = data.id;
        this.name = data.name;
        this.street = data.street;
        this.city = data.city;
        this.zip = data.zip;
    }
};