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