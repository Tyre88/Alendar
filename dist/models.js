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
    logo: "",
    images: [],
    initialize: function(data)
    {
        this.id = data.id;
        this.name = data.name;
        this.street = data.street;
        this.city = data.city;
        this.zip = data.zip;
        this.logo = data.logo;
        this.images = data.images;
    }
};

var Performer = function(data) 
{
    if(data)
    {
        this.initialize(data);
    }
};

Performer.prototype =
{
    id: 0,
    company: new Company(),
    name: "",
    img: "",
    initialize: function(data)
    {
        this.id = data.id;
        this.name = data.name;
        this.img = data.img;
    
        this.company.initialize(data.company);
    }
};