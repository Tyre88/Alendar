/******************************************
Load on demand
******************************************/

function LoadCss(url) 
{
    if(url instanceof Array)
    {
        for(var i = 0; i < url.length; i++)
        {
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = url[i];
            document.getElementsByTagName("head")[0].appendChild(link);
        }
    }
    else
    {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }
}


/******************************************
String manipulations
******************************************/
String.format = function ()
{
	var s = arguments[0];
	for (var i = 0; i < arguments.length - 1; i++)
	{
		var reg = new RegExp("\\{" + i + "\\}", "gm");
		s = s.replace(reg, arguments[i + 1]);
	}

	return s;
}

function tryParseInt(value)
{
	var result = parseInt(value);
	return isNaN(result) ? 0 : result;
}

/******************************************
Array manipulations
******************************************/
Array.prototype.RemoveValue = function (itemName, value)
{
	var index = -1;
	for (var i = 0; i < this.length; i++)
	{
		if (this[i][itemName] == value)
		{
			index = i;
			break;
		}
	}

	if (index >= 0)
	{
		this.splice(index, 1);
	}
};

Array.prototype.GetItemByValue = function (itemName, value)
{
	var index = -1;
	for (var i = 0; i < this.length; i++)
	{
		if (this[i][itemName] == value)
		{
			index = i;
			break;
		}
	}

	return index >= 0 ? this[i] : null;
};

Array.prototype.RemoveItems = function(itemsToRemove)
{
    var indices = [];

    for(var i = 0; i < itemsToRemove.length; i++)
    {
        var item = itemsToRemove[i];
        var index = this.indexOf(item);

        while(index > -1)
        {
            indices.push(index);
            index = this.indexOf(item, index + 1);
        }
    }

    indices.sort();

    for(var i = 0; i < indices.length; i++)
    {
        var index = indices[i] - i;
        this.splice(index, 1);
    }
}

/******************************************
JSON
******************************************/
JSON.tryParse = function (value, fallbackObject)
{
	var result;

	try
	{
		result = this.parse(value);
	}
	catch (e)
	{
		result = fallbackObject;
	}

	return result;
};

/*******************************
	Namespacing
*******************************/
function namespace(namespaceString) {
    var parts = namespaceString.split('.'),
        parent = window,
        currentPart = '';    
        
    for(var i = 0, length = parts.length; i < length; i++) {
        currentPart = parts[i];
        parent[currentPart] = parent[currentPart] || {};
        parent = parent[currentPart];
    }
    
    return parent;
}

/*******************************
****Get/Set Property Pattern****
	
	Usage:
		SomeFunction = function() { return PropertyPattern(arguments, "PropertyId"); }
		
	Creates a get/set for the specified property
	
	Passing in a parameter to SomeFunction will set the value for that property. Calling the method without any parameters
	will return the value for that property.
*******************************/
function PropertyPattern(args, propertyId)
{
	if (args.length > 0)
	{
		eval(propertyId + '=args[0]');
		return this;
	}

	return eval(propertyId);
};

//Utility for reading queryparameter values
(function ()
{
	var urlParams = {};
	var queryParameters = window.location.search.substring(1).split("&");
	for (var i = 0; i < queryParameters.length; i++)
	{
		var queryParameter = queryParameters[i].split("=");
		if (queryParameter.length != 2 || !queryParameter[0] || !queryParameter[1])
		{
			continue;
		}

		urlParams[queryParameter[0].toLocaleLowerCase()] = queryParameter[1].toString();
	}

	window.GetQueryParameter = function (queryParameterName)
	{
		return urlParams[queryParameterName.toLowerCase()];
	};
})();


//Function to get nested properties
function GetPropertyByString(obj, propertyString) {
    if (!propertyString)
        return undefined;

    var prop, props = propertyString.split('.');

    for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
        prop = props[i];

        var candidate = obj[prop];
        if (candidate !== undefined) {
            obj = candidate;
        } else {
            break;
        }
    }
    return obj[props[i]];
}

function ChangePropertyByString(obj, propertyString, newValue)
{
	if (!propertyString)
		return;

	var prop, props = propertyString.split('.');

	for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
		prop = props[i];

		var candidate = obj[prop];
		if (candidate !== undefined) {
			obj = candidate;
		} else {
			break;
		}
	}
	obj[props[i]] = newValue;
}

function SortListByPropertyString($filter, obj, propertyString, ascDesc)
{
    if(!propertyString)
    {
        return;
    }

    var prop, props = propertyString.split('.');

    for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
        prop = props[i];

        var candidate = obj[prop];
        if (candidate !== undefined) {
            obj = candidate;
        } else {
            break;
        }
    }

    var orderBy = $filter('orderBy');

    obj = orderBy(obj, props[i], ascDesc);

    return obj;
};